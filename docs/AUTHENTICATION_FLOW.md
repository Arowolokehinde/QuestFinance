# Authentication Flow Documentation

## Overview

QuestFi supports multiple authentication methods through Turnkey's secure infrastructure:
- **Email OTP** (One-Time Password)
- **Google OAuth**
- **Passkey** (WebAuthn)
- **Wallet Connect** (Stacks wallets)

---

## Complete Authentication Architecture

```mermaid
graph TB
    subgraph "User Interface"
        A[Landing Page]
        B[Auth Modal]
        C[Profile Dashboard]
    end

    subgraph "Frontend Components"
        D[TurnkeyAuth.tsx]
        E[Navbar.tsx]
        F[OAuthCallbackHandler.tsx]
    end

    subgraph "API Routes"
        G[/api/auth/init-otp]
        H[/api/auth/verify-otp]
        I[/api/auth/google-callback]
        J[/api/auth/wallet/challenge]
        K[/api/auth/login/wallet]
        L[/api/auth/register/wallet]
    end

    subgraph "External Services"
        M[Turnkey API]
        N[Google OAuth]
        O[Stacks Wallet]
    end

    subgraph "Storage"
        P[(MongoDB)]
        Q[localStorage]
    end

    A --> B
    B --> D
    D --> G
    D --> I
    D --> K

    G --> M
    H --> M
    I --> N
    J --> O
    K --> O
    L --> O

    M --> P
    K --> P
    L --> P

    D --> Q
    Q --> E
    E --> C

    style A fill:#6366f1
    style M fill:#ec4899
    style P fill:#10b981
    style Q fill:#f59e0b
```

---

## 1. Email OTP Authentication

### Flow Diagram

```mermaid
sequenceDiagram
    autonumber
    participant User
    participant Frontend
    participant API as Backend API
    participant Turnkey
    participant MongoDB

    User->>Frontend: Enter email
    Frontend->>API: POST /api/auth/init-otp
    API->>Turnkey: emailAuth(contact, userIdentifier)
    Turnkey->>User: Send OTP email
    Turnkey-->>API: Return otpId
    API-->>Frontend: Return otpId

    User->>Frontend: Enter OTP code
    Frontend->>API: POST /api/auth/getSuborgs
    API->>Turnkey: Query existing user

    alt User Exists
        API->>API: Get existing suborgID
    else New User
        API->>Turnkey: createSubOrganization()
        Turnkey-->>API: Return new suborgID
    end

    Frontend->>API: POST /api/auth/verify-otp
    API->>Turnkey: Verify OTP code
    Turnkey-->>API: Return session JWT

    API->>MongoDB: Save user profile
    MongoDB-->>API: Confirm saved

    API-->>Frontend: Return session + suborgID
    Frontend->>Frontend: Store in localStorage
    Frontend->>User: Redirect to dashboard
```

### Implementation

```typescript
// 1. Initialize OTP
const initOtpResponse = await axios.post('/api/auth/init-otp', {
  contact: email,
  userIdentifier: pubKey,
  otpType: 'OTP_TYPE_EMAIL',
})

// 2. Check if user exists
const getSuborgsResponse = await axios.post('/api/auth/getSuborgs', {
  filterType: 'EMAIL',
  filterValue: email,
})

// 3. Verify OTP
const authResponse = await axios.post('/api/auth/verify-otp', {
  suborgID: userSuborgID,
  otpId,
  otpCode,
  targetPublicKey: pubKey,
})

// 4. Store session
localStorage.setItem('turnkey_session', session)
localStorage.setItem('turnkey_suborg_id', userSuborgID)
localStorage.setItem('user_email', email)
window.dispatchEvent(new Event('auth-changed'))
```

---

## 2. Google OAuth Authentication

### Flow Diagram

```mermaid
sequenceDiagram
    autonumber
    participant User
    participant Frontend
    participant Google
    participant Callback as OAuth Callback
    participant Turnkey
    participant MongoDB

    User->>Frontend: Click "Sign in with Google"
    Frontend->>Frontend: Generate nonce (sha256 of pubkey)
    Frontend->>Frontend: Store pubkey & nonce in localStorage
    Frontend->>Google: Redirect to Google OAuth<br/>(with nonce & state)

    Google->>User: Show consent screen
    User->>Google: Approve access
    Google->>Callback: Redirect with auth code

    Callback->>Google: Exchange code for tokens
    Google-->>Callback: Return ID token

    Callback->>Callback: Verify nonce matches
    Callback->>Turnkey: oauthAuth(oidcToken)

    alt User Exists
        Turnkey-->>Callback: Return existing user session
    else New User
        Turnkey->>Turnkey: Create sub-organization
        Turnkey-->>Callback: Return new user session
    end

    Callback->>MongoDB: Save/update user profile
    Callback->>Frontend: Redirect to app (with success state)
    Frontend->>Frontend: Store session in localStorage
    Frontend->>User: Show dashboard
```

### Implementation

```typescript
// 1. Initiate OAuth
const googleAuthUrl = new URL('https://accounts.google.com/o/oauth2/v2/auth')
googleAuthUrl.searchParams.set('client_id', process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID)
googleAuthUrl.searchParams.set('redirect_uri', `${window.location.origin}/api/auth/google-callback`)
googleAuthUrl.searchParams.set('response_type', 'code')
googleAuthUrl.searchParams.set('scope', 'openid email profile')
googleAuthUrl.searchParams.set('nonce', nonce)
googleAuthUrl.searchParams.set('state', JSON.stringify({ returnTo: window.location.pathname }))

window.location.href = googleAuthUrl.toString()

// 2. Handle callback (backend)
const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
  method: 'POST',
  body: JSON.stringify({
    code,
    client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    client_secret: process.env.GOOGLE_CLIENT_SECRET,
    redirect_uri,
    grant_type: 'authorization_code',
  }),
})

// 3. Verify and authenticate with Turnkey
const idToken = data.id_token
const session = await turnkeyClient.oauthAuth({ oidcToken: idToken })
```

---

## 3. Passkey Authentication (WebAuthn)

### Flow Diagram

```mermaid
sequenceDiagram
    autonumber
    participant User
    participant Frontend
    participant Browser
    participant API
    participant Turnkey
    participant MongoDB

    User->>Frontend: Enter email for passkey
    Frontend->>API: POST /api/auth/getSuborgs

    alt New User
        API-->>Frontend: User not found
        Frontend->>Frontend: Generate registration URL
        Frontend->>API: POST /api/auth/send-registration-email
        API->>User: Send email with registration link
        User->>User: Open link on device with passkey
        User->>Browser: Click "Register Passkey"
        Browser->>Browser: Show biometric prompt
        User->>Browser: Authenticate (Face ID/Touch ID)
        Browser->>Turnkey: Create passkey
        Turnkey->>MongoDB: Save passkey to user profile
    else Existing User
        API-->>Frontend: Return suborgID
        Frontend->>Browser: loginWithPasskey()
        Browser->>User: Show biometric prompt
        User->>Browser: Authenticate
        Browser->>Turnkey: Verify passkey
        Turnkey-->>Frontend: Return session
        Frontend->>Frontend: Store session
        Frontend->>User: Redirect to dashboard
    end
```

### Implementation

```typescript
// New user registration
const registrationUrl = `${window.location.origin}/auth/register-passkey?email=${email}&publicKey=${pubKey}`

await axios.post('/api/auth/send-registration-email', {
  email,
  registrationUrl,
})

// Existing user login
await passkeyClient.loginWithPasskey({
  publicKey: pubKey,
})

localStorage.setItem('turnkey_suborg_id', userSuborgID)
localStorage.setItem('turnkey_session', 'passkey_authenticated')
localStorage.setItem('user_email', email)
```

---

## 4. Wallet Connect Authentication

### Flow Diagram

```mermaid
sequenceDiagram
    autonumber
    participant User
    participant Frontend
    participant Wallet as Stacks Wallet
    participant API
    participant Backend
    participant MongoDB

    User->>Frontend: Click "Connect Wallet"
    Frontend->>Wallet: connect()
    Wallet->>User: Show connection prompt
    User->>Wallet: Approve connection
    Wallet-->>Frontend: Return wallet address & pubKey

    Frontend->>API: GET /api/auth/wallet/challenge
    API->>Backend: Generate challenge message
    Backend-->>API: Return challenge
    API-->>Frontend: Return challenge

    Frontend->>Wallet: signMessage(challenge)
    Wallet->>User: Show signature request
    User->>Wallet: Approve signature
    Wallet-->>Frontend: Return signature

    Frontend->>API: POST /api/auth/login/wallet
    API->>Backend: Verify signature

    alt User Exists
        Backend-->>API: Return user session
        API-->>Frontend: Login successful
    else New User
        API->>API: POST /api/auth/register/wallet
        Backend->>MongoDB: Create new user
        Backend-->>API: Return new user session
        API-->>Frontend: Registration successful
    end

    Frontend->>Frontend: Store session
    Frontend->>Frontend: Mark wallet as connected
    Frontend->>User: Show dashboard
```

### Implementation

```typescript
// 1. Connect wallet
const walletData = await walletService.connectWallet()

// 2. Get challenge
const challengeResponse = await fetch(`/api/auth/wallet/challenge?address=${walletData.address}&type=connection`)
const { challenge } = await challengeResponse.json()

// 3. Sign challenge
const signatureData = await walletService.signMessage(challenge)

// 4. Try login first
const loginResponse = await fetch('/api/auth/login/wallet', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    address: walletData.address,
    signature: signatureData.signature,
    message: challenge,
    publicKey: signatureData.publicKey,
  }),
})

// 5. If user doesn't exist, register
if (loginResult.error?.includes('not found')) {
  const registerResponse = await fetch('/api/auth/register/wallet', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      address: walletData.address,
      signature: signatureData.signature,
      message: challenge,
      publicKey: signatureData.publicKey,
    }),
  })
}

// 6. Store session
localStorage.setItem('wallet_address', walletData.address)
localStorage.setItem('wallet_connected', 'true')
window.dispatchEvent(new Event('auth-changed'))
```

---

## Session Management

### localStorage Structure

```typescript
// Turnkey Auth
localStorage.setItem('turnkey_session', 'jwt_token_here')
localStorage.setItem('turnkey_suborg_id', 'suborg_id_here')
localStorage.setItem('user_email', 'user@example.com')

// Wallet Auth
localStorage.setItem('wallet_address', 'ST2F3J1PK46D6XVRBB9SQ66PY89P8G0EBDW5E05M7')
localStorage.setItem('wallet_connected', 'true')
```

### Auth State Detection

```mermaid
flowchart TD
    A[Check Authentication] --> B{Turnkey Session?}
    B -->|Yes| C{Has suborg ID?}
    C -->|Yes| D[Authenticated via Turnkey]
    C -->|No| E[Invalid Session]

    B -->|No| F{Wallet Connected?}
    F -->|Yes| G[Authenticated via Wallet]
    F -->|No| H[Not Authenticated]

    D --> I[Allow Access]
    G --> I
    E --> J[Redirect to Login]
    H --> J

    style D fill:#10b981
    style G fill:#10b981
    style I fill:#10b981
    style E fill:#ef4444
    style H fill:#ef4444
    style J fill:#ef4444
```

### Auth Event System

```typescript
// Listen for auth changes
window.addEventListener('auth-changed', () => {
  const session = localStorage.getItem('turnkey_session')
  const suborgId = localStorage.getItem('turnkey_suborg_id')
  const walletConnected = localStorage.getItem('wallet_connected')

  if ((session && suborgId) || walletConnected === 'true') {
    setIsAuthenticated(true)
  } else {
    setIsAuthenticated(false)
  }
})

// Dispatch after authentication
window.dispatchEvent(new Event('auth-changed'))
```

---

## API Endpoints

### Authentication Endpoints

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/auth/init-otp` | POST | Initialize email OTP |
| `/api/auth/verify-otp` | POST | Verify OTP and create session |
| `/api/auth/getSuborgs` | POST | Check if user exists |
| `/api/auth/createSuborg` | POST | Create new Turnkey sub-org |
| `/api/auth/google-callback` | GET | Handle Google OAuth callback |
| `/api/auth/wallet/challenge` | GET | Generate wallet signature challenge |
| `/api/auth/login/wallet` | POST | Login with wallet signature |
| `/api/auth/register/wallet` | POST | Register new wallet user |
| `/api/auth/send-registration-email` | POST | Send passkey registration email |

### Request/Response Examples

#### Initialize OTP
```typescript
// Request
POST /api/auth/init-otp
{
  "contact": "user@example.com",
  "userIdentifier": "public_key_here",
  "otpType": "OTP_TYPE_EMAIL"
}

// Response
{
  "success": true,
  "otpId": "otp_id_here"
}
```

#### Verify OTP
```typescript
// Request
POST /api/auth/verify-otp
{
  "suborgID": "suborg_id_here",
  "otpId": "otp_id_here",
  "otpCode": "123456",
  "targetPublicKey": "public_key_here"
}

// Response
{
  "success": true,
  "credentialBundle": "jwt_session_token"
}
```

---

## Security Considerations

### 1. Non-Custodial Architecture
- Users control their own keys via Turnkey sub-organizations
- Private keys never leave Turnkey's secure infrastructure
- App only stores session tokens, not keys

### 2. Challenge-Response for Wallets
- Backend generates unique challenge per request
- Challenge expires after 5 minutes
- Signature verification ensures wallet ownership
- Prevents replay attacks

### 3. Session Security
- JWT tokens with expiration
- Secure HTTP-only cookies for sensitive data
- Session invalidation on logout
- Automatic token refresh

### 4. OAuth Security
- Nonce prevents CSRF attacks
- State parameter for session validation
- Token verification on backend
- Secure redirect URIs

---

## Troubleshooting

### Common Issues

**Issue: "Not authenticated" after wallet connect**
- Solution: Check that `wallet_connected` is set to `'true'` in localStorage
- Verify auth-changed event is dispatched

**Issue: OTP not received**
- Check email spam folder
- Verify Turnkey email configuration
- Ensure correct email format

**Issue: Passkey not working**
- Verify device supports WebAuthn
- Check browser compatibility
- Ensure HTTPS connection

**Issue: Redirect loop after OAuth**
- Clear localStorage
- Check OAuth callback URL configuration
- Verify state parameter handling

---

## Best Practices

1. **Always dispatch `auth-changed` event** after authentication
2. **Check both Turnkey and wallet auth** in protected routes
3. **Use appropriate headers** for API calls (`x-suborg-id` or `x-wallet-address`)
4. **Handle auth failures gracefully** with user-friendly messages
5. **Clear all auth data** on logout
6. **Validate signatures** on backend for wallet auth
7. **Use HTTPS** in production for security

---

This documentation covers all authentication flows in QuestFi. For additional questions, refer to the main [README.md](../README.md) or [ARCHITECTURE.md](ARCHITECTURE.md).

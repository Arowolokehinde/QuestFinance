import {
  makeUnsignedSTXTokenTransfer,
  TransactionSigner,
  sigHashPreSign,
  SingleSigSpendingCondition,
  createMessageSignature,
  broadcastTransaction,
  type StacksTransactionWire,
} from '@stacks/transactions'
import { STACKS_TESTNET, STACKS_MAINNET, type StacksNetwork } from '@stacks/network'

export interface SignAndBroadcastParams {
  publicKey: string
  recipient: string
  amount: bigint
  nonce: bigint
  fee: bigint
  network: 'testnet' | 'mainnet'
}

export interface TransactionResult {
  success: boolean
  txId?: string
  transaction?: StacksTransactionWire
  error?: string
}

/**
 * Sign and broadcast a STX transfer transaction using Turnkey
 */
export async function signAndBroadcastSTXTransfer(
  params: SignAndBroadcastParams
): Promise<TransactionResult> {
  try {
    // 1. Create unsigned transaction
    const unsignedTx = await makeUnsignedSTXTokenTransfer({
      recipient: params.recipient,
      amount: params.amount,
      publicKey: params.publicKey,
      nonce: params.nonce,
      fee: params.fee,
      network: params.network,
    })

    // 2. Generate preSignSigHash (Stacks-specific)
    const signer = new TransactionSigner(unsignedTx)
    const preSignSigHash = sigHashPreSign(
      signer.sigHash,
      unsignedTx.auth.authType,
      unsignedTx.auth.spendingCondition.fee,
      unsignedTx.auth.spendingCondition.nonce
    )

    // 3. Sign with Turnkey via backend API
    const payload = `0x${preSignSigHash}`

    const signResponse = await fetch('/api/stacks/sign', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        payload,
        publicKey: params.publicKey,
      }),
    })

    const signData = await signResponse.json()

    if (!signData.success || !signData.signature) {
      throw new Error(signData.message || 'Failed to sign transaction')
    }

    const { v, r, s } = signData.signature

    // 4. Format signature (V + R + S)
    const nextSig = `${v}${r.padStart(64, '0')}${s.padStart(64, '0')}`

    // 5. Attach signature to transaction
    const spendingCondition = unsignedTx.auth
      .spendingCondition as SingleSigSpendingCondition
    spendingCondition.signature = createMessageSignature(nextSig)

    // 6. Broadcast transaction
    const network: StacksNetwork =
      params.network === 'mainnet' ? STACKS_MAINNET : STACKS_TESTNET

    const result = await broadcastTransaction({
      transaction: unsignedTx,
      network,
    })

    // Check if broadcast was successful (only has txid, no error/reason)
    if ('txid' in result && !('error' in result)) {
      return {
        success: true,
        txId: result.txid,
        transaction: unsignedTx,
      }
    }

    // Handle rejection (has error and reason fields)
    if ('error' in result && 'reason' in result) {
      throw new Error(`${result.error}: ${result.reason}`)
    }

    throw new Error('Transaction broadcast failed')
  } catch (error) {
    console.error('Transaction signing/broadcasting failed:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    }
  }
}

/**
 * Get STX balance for an address
 */
export async function getSTXBalance(address: string): Promise<number> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_STACKS_API_URL!
    const response = await fetch(`${apiUrl}/extended/v1/address/${address}/stx`)
    const data = await response.json()

    // Convert microSTX to STX
    return parseInt(data.balance) / 1_000_000
  } catch (error) {
    console.error('Failed to fetch STX balance:', error)
    return 0
  }
}

/**
 * Get account nonce for transaction
 */
export async function getAccountNonce(address: string): Promise<bigint> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_STACKS_API_URL!
    const response = await fetch(`${apiUrl}/v2/accounts/${address}?proof=0`)
    const data = await response.json()

    return BigInt(data.nonce)
  } catch (error) {
    console.error('Failed to fetch account nonce:', error)
    return BigInt(0)
  }
}

/**
 * Convert STX to microSTX
 */
export function stxToMicroStx(stx: number): bigint {
  return BigInt(Math.floor(stx * 1_000_000))
}

/**
 * Convert microSTX to STX
 */
export function microStxToStx(microStx: bigint): number {
  return Number(microStx) / 1_000_000
}

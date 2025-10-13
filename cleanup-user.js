// Quick script to reset user data in MongoDB
// Run with: node cleanup-user.js

const { MongoClient } = require('mongodb')
require('dotenv').config({ path: './frontend/.env.local' })

const suborgId = 'f07315cc-6b0c-41de-848d-a893cde98c13'

async function resetUser() {
  const client = new MongoClient(process.env.MONGODB_URI)

  try {
    await client.connect()
    console.log('Connected to MongoDB')

    const db = client.db('QuestFi')
    const collection = db.collection('userProfiles')

    const result = await collection.updateOne(
      { suborgId },
      {
        $set: {
          totalXP: 0,
          level: 1,
          rank: 0,
          badgesEarned: 0,
          streak: 0,
          nextLevelXP: 100,
          badges: [],
          completedQuests: [],
          achievements: [],
          updatedAt: new Date()
        }
      }
    )

    console.log('User reset successfully:', result)

    // Fetch and display updated user
    const user = await collection.findOne({ suborgId })
    console.log('\nUpdated user data:', JSON.stringify(user, null, 2))

  } catch (error) {
    console.error('Error:', error)
  } finally {
    await client.close()
  }
}

resetUser()

import { NextRequest, NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'

const defaultProfile = {
  totalXP: 0,
  level: 1,
  rank: 0,
  badgesEarned: 0,
  streak: 0,
  nextLevelXP: 100,
  badges: [],
  completedQuests: [],
  achievements: [],
}

export async function GET(request: NextRequest) {
  try {
    const suborgId = request.headers.get('x-suborg-id')

    if (!suborgId) {
      return NextResponse.json(
        { success: false, message: 'Not authenticated' },
        { status: 401 }
      )
    }

    const client = await clientPromise
    const db = client.db('QuestFi')
    const collection = db.collection('userProfiles')

    // Get user profile from MongoDB
    let profile = await collection.findOne({ suborgId })

    if (!profile) {
      // Create new profile if doesn't exist
      profile = { ...defaultProfile, suborgId, createdAt: new Date() }
      await collection.insertOne(profile)
    }

    return NextResponse.json({
      success: true,
      profile,
    })
  } catch (error: any) {
    console.error('Get profile error:', error)
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const suborgId = request.headers.get('x-suborg-id')

    if (!suborgId) {
      return NextResponse.json(
        { success: false, message: 'Not authenticated' },
        { status: 401 }
      )
    }

    const client = await clientPromise
    const db = client.db('QuestFi')
    const collection = db.collection('userProfiles')

    const body = await request.json()
    const { action, data } = body

    // Get current profile
    let currentProfile = await collection.findOne({ suborgId })

    if (!currentProfile) {
      currentProfile = { ...defaultProfile, suborgId, createdAt: new Date() }
      await collection.insertOne(currentProfile)
    }

    // Handle different actions
    switch (action) {
      case 'complete_quest':
        const { questId, xpReward } = data
        if (!currentProfile.completedQuests.includes(questId)) {
          currentProfile.completedQuests.push(questId)
          currentProfile.totalXP += xpReward

          // Level up logic
          while (currentProfile.totalXP >= currentProfile.nextLevelXP) {
            currentProfile.level++
            currentProfile.nextLevelXP = currentProfile.level * 100
          }
        }
        break

      case 'mint_badge':
        const { badge } = data
        currentProfile.badges.push(badge)
        currentProfile.badgesEarned++
        currentProfile.totalXP += badge.xpEarned
        break

      case 'update_streak':
        currentProfile.streak = data.streak
        break

      default:
        return NextResponse.json(
          { success: false, message: 'Invalid action' },
          { status: 400 }
        )
    }

    // Save updated profile to MongoDB
    await collection.updateOne(
      { suborgId },
      { $set: { ...currentProfile, updatedAt: new Date() } }
    )

    return NextResponse.json({
      success: true,
      profile: currentProfile,
    })
  } catch (error: any) {
    console.error('Update profile error:', error)
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    )
  }
}

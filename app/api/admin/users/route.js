import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongoose'
import User from '@/modules/user'

export async function GET() {
  try {
    // Connect to database
    await connectDB()

    // Fetch all users
    const users = await User.find({}, { password: 0 }).sort({ createdAt: -1 })

    // Get statistics
    const totalUsers = await User.countDocuments()
    const newUsersToday = await User.countDocuments({
      createdAt: { $gte: new Date(new Date().setHours(0, 0, 0, 0)) }
    })
    const adminUsers = await User.countDocuments({ isAdmin: true })

    const stats = {
      totalUsers,
      newUsersToday,
      adminUsers,
      regularUsers: totalUsers - adminUsers
    }

    return NextResponse.json({ 
      success: true, 
      users, 
      stats 
    })

  } catch (error) {
    console.error('Admin API Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' }, 
      { status: 500 }
    )
  }
}

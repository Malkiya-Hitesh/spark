import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongoose'
import Registration from '@/modules/registration'

export async function GET() {
  try {
    await connectDB()
    const regs = await Registration.find().sort({ createdAt: -1 })
    return NextResponse.json({ success: true, registrations: regs })
  } catch (err) {
    return NextResponse.json({ error: err.message || 'Server error' }, { status: 500 })
  }
}

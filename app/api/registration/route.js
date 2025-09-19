import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongoose'
import Registration from '@/modules/registration'

export async function POST(request) {
  try {
    await connectDB()
    const body = await request.json()

    const required = ['name','email','parentName','yourContact','parentContact','teacherName','teacherContact','schoolName','amount']
    for (const key of required) {
      if (!body[key] && body[key] !== 0) {
        return NextResponse.json({ error: `Missing field: ${key}` }, { status: 400 })
      }
    }

    const doc = await Registration.create({
      name: body.name,
      email: body.email,
      parentName: body.parentName,
      yourContact: body.yourContact,
      parentContact: body.parentContact,
      teacherName: body.teacherName,
      teacherContact: body.teacherContact,
      schoolName: body.schoolName,
      amount: Number(body.amount) || 0,
      payment: { status: 'initiated' }
    })

    return NextResponse.json({ success: true, registration: doc })
  } catch (err) {
    return NextResponse.json({ error: err.message || 'Server error' }, { status: 500 })
  }
}

export async function GET() {
  try {
    await connectDB()
    const regs = await Registration.find().sort({ createdAt: -1 })
    return NextResponse.json({ success: true, registrations: regs })
  } catch (err) {
    return NextResponse.json({ error: err.message || 'Server error' }, { status: 500 })
  }
}

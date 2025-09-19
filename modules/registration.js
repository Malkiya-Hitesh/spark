import mongoose from 'mongoose'

const registrationSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },
  parentName: { type: String, required: true, trim: true },
  yourContact: { type: String, required: true, trim: true },
  parentContact: { type: String, required: true, trim: true },
  teacherName: { type: String, required: true, trim: true },
  teacherContact: { type: String, required: true, trim: true },
  schoolName: { type: String, required: true, trim: true },
  amount: { type: Number, required: true, min: 0 },
  payment: {
    status: { type: String, enum: ['initiated', 'success', 'failed'], default: 'initiated' },
    orderId: { type: String },
    paymentId: { type: String },
    signature: { type: String }
  }
}, { timestamps: true })

const Registration = mongoose.models.Registration || mongoose.model('Registration', registrationSchema)
export default Registration

import mongoose, { Schema, Document } from 'mongoose'

export type ContactSource = 'home' | 'contact' | 'get-quote'
export type ContactStatus = 'new' | 'contacted' | 'closed'

export interface IContact extends Document {
  name?: string
  email: string
  phone?: string
  message: string
  source: ContactSource
  status: ContactStatus
  createdAt: Date
  updatedAt: Date
}

const ContactSchema = new Schema<IContact>(
  {
    name:    { type: String, trim: true },
    email:   { type: String, required: true, trim: true, lowercase: true },
    phone:   { type: String, trim: true },
    message: { type: String, required: true, trim: true },
    source:  { type: String, enum: ['home', 'contact', 'get-quote'], default: 'contact' },
    status:  { type: String, enum: ['new', 'contacted', 'closed'], default: 'new' },
  },
  { timestamps: true }
)

export default mongoose.model<IContact>('Contact', ContactSchema)

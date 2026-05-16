import mongoose, { Schema, Document } from 'mongoose'

export interface IService extends Document {
  title: string
  description: string
  icon: string
  tags: string[]
  order: number
}

const ServiceSchema = new Schema<IService>(
  {
    title:       { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    icon:        { type: String, required: true },
    tags:        { type: [String], default: [] },
    order:       { type: Number, default: 0 },
  },
  { timestamps: true }
)

export default mongoose.model<IService>('Service', ServiceSchema)

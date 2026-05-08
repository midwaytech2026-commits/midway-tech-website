import { Request, Response } from 'express'
import Service from '../models/service.model'

export async function getServices(_req: Request, res: Response): Promise<void> {
  try {
    const services = await Service.find().sort({ order: 1 })
    res.json({ success: true, data: services })
  } catch {
    res.status(500).json({ success: false, message: 'Server error' })
  }
}

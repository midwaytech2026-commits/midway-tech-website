import { Request, Response } from 'express'
import Contact from '../models/contact.model'

export async function submitContact(req: Request, res: Response): Promise<void> {
  try {
    const { name, email, phone, message } = req.body
    if (!name || !email || !message) {
      res.status(400).json({ success: false, message: 'name, email, and message are required' })
      return
    }
    const contact = await Contact.create({ name, email, phone, message })
    res.status(201).json({ success: true, data: contact })
  } catch {
    res.status(500).json({ success: false, message: 'Server error' })
  }
}

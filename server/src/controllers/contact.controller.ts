import { Request, Response } from 'express'
import Contact from '../models/contact.model'
import { sendContactNotification } from '../services/email.service'

const VALID_SOURCES = ['home', 'contact', 'get-quote']

export async function submitContact(req: Request, res: Response): Promise<void> {
  try {
    const { name, email, phone, message, source } = req.body
    if (!email || !message) {
      res.status(400).json({ success: false, message: 'email and message are required' })
      return
    }
    const resolvedSource = VALID_SOURCES.includes(source) ? source : 'contact'

    const contact = await Contact.create({ name, email, phone, message, source: resolvedSource })
    res.status(201).json({ success: true, data: contact })

    try {
      await sendContactNotification(contact)
    } catch (err) {
      console.warn('[contact.controller] Notification email failed:', err)
    }
  } catch {
    res.status(500).json({ success: false, message: 'Server error' })
  }
}

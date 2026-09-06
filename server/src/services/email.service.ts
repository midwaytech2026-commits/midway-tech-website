import nodemailer from 'nodemailer'
import type { IContact } from '../models/contact.model'

const SOURCE_LABELS: Record<string, string> = {
  home: 'Home',
  contact: 'Contact',
  'get-quote': 'Get Quote',
}

function buildTransporter() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    return null
  }
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  })
}

export async function sendContactNotification(contact: IContact): Promise<void> {
  const { CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env

  if (!CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
    console.warn('[email.service] CONTACT_TO_EMAIL or CONTACT_FROM_EMAIL not set — skipping notification email')
    return
  }

  const transporter = buildTransporter()
  if (!transporter) {
    console.warn('[email.service] SMTP env vars not fully configured — skipping notification email')
    return
  }

  const sourceLabel = SOURCE_LABELS[contact.source] ?? contact.source
  const subject = `New MidwayTech Inquiry — ${sourceLabel}`

  const lines = [
    `Name: ${contact.name || 'N/A'}`,
    `Email: ${contact.email}`,
  ]
  if (contact.phone) lines.push(`Phone: ${contact.phone}`)
  lines.push(`Source: ${sourceLabel}`)
  lines.push('')
  lines.push('Message:')
  lines.push(contact.message)
  lines.push('')
  lines.push(`Submitted: ${contact.createdAt.toISOString()}`)

  try {
    await transporter.sendMail({
      from: CONTACT_FROM_EMAIL,
      to: CONTACT_TO_EMAIL,
      subject,
      text: lines.join('\n'),
    })
  } catch (err) {
    console.warn('[email.service] Failed to send contact notification email:', err)
  }
}

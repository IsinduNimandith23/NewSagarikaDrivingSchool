import { Resend } from 'resend'
import { COURSE_LABELS, DEFAULT_COURSE } from '@/lib/courses'

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!
  )

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return Response.json({ error: 'Email service is not configured' }, { status: 500 })
  }

  let body: { name?: string; email?: string; phone?: string; course?: string; message?: string }
  try {
    body = await req.json()
  } catch {
    return Response.json({ error: 'Invalid request' }, { status: 400 })
  }

  const name = body.name?.trim() ?? ''
  const email = body.email?.trim() ?? ''
  const phone = body.phone?.trim() ?? ''
  const course = COURSE_LABELS.includes(body.course ?? '') ? body.course! : DEFAULT_COURSE
  const message = body.message?.trim() ?? ''

  if (!name || !email || !phone) {
    return Response.json({ error: 'Name, email and phone are required' }, { status: 400 })
  }
  if (name.length > 200 || email.length > 200 || phone.length > 50 || message.length > 5000) {
    return Response.json({ error: 'A field exceeds the allowed length' }, { status: 400 })
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: 'Invalid email address' }, { status: 400 })
  }

  const resend = new Resend(apiKey)
  const { error } = await resend.emails.send({
    from: process.env.CONTACT_FROM_EMAIL ?? 'New Sagarika Driving School <onboarding@resend.dev>',
    to: process.env.CONTACT_TO_EMAIL ?? 'newsagarikadrivingschool@gmail.com',
    replyTo: email,
    subject: `New enquiry from ${name} — ${course}`,
    html: `
      <h2>New website enquiry</h2>
      <table cellpadding="6" style="border-collapse:collapse">
        <tr><td><strong>Name</strong></td><td>${escapeHtml(name)}</td></tr>
        <tr><td><strong>Email</strong></td><td>${escapeHtml(email)}</td></tr>
        <tr><td><strong>Phone</strong></td><td>${escapeHtml(phone)}</td></tr>
        <tr><td><strong>Course</strong></td><td>${escapeHtml(course)}</td></tr>
      </table>
      <p><strong>Message</strong></p>
      <p>${escapeHtml(message) || '(none)'}</p>
    `,
  })

  if (error) {
    console.error('Resend error:', error)
    return Response.json({ error: 'Failed to send message' }, { status: 502 })
  }

  return Response.json({ ok: true })
}

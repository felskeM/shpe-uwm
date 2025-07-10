'use client'

import { useState } from 'react'

/**
 * Controlled contact form with structured logging on submission.
 */
interface ContactFormFields {
  firstName: string
  lastName: string
  email: string
  subject: string
  message: string
}

export default function ContactForm() {
  const [fields, setFields] = useState<ContactFormFields>({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFields((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // INFO: log form values
    console.info('ContactForm submitted', fields)
    alert('Thank you for reaching out! We will be in touch soon.')
    // reset
    setFields({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
    })
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-lg">
        <h2 className="text-3xl font-bold text-center text-shpe-dark mb-8">
          Get In Touch
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {[
            { label: 'First Name', name: 'firstName', type: 'text' },
            { label: 'Last Name',  name: 'lastName',  type: 'text' },
            { label: 'Email',      name: 'email',      type: 'email' },
            { label: 'Subject',    name: 'subject',    type: 'text' },
          ].map(({ label, name, type }) => (
            <div key={name}>
              <label htmlFor={name} className="block mb-1 font-medium text-shpe-dark">
                {label}
              </label>
              <input
                id={name}
                name={name}
                type={type}
                value={fields[name as keyof ContactFormFields]}
                onChange={handleChange}
                placeholder={label}
                className="w-full border border-shpe-light-gray rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-shpe-red"
                required
              />
            </div>
          ))}

          <div>
            <label htmlFor="message" className="block mb-1 font-medium text-shpe-dark">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={fields.message}
              onChange={handleChange}
              placeholder="Your message…"
              className="w-full border border-shpe-light-gray rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-shpe-red"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-shpe-red hover:bg-shpe-orange text-white font-semibold py-3 rounded-lg transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

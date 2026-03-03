'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin } from 'lucide-react'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    serviceType: 'general',
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true)
      setLoading(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        serviceType: 'general',
      })
      setTimeout(() => setSubmitted(false), 5000)
    }, 1000)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="John Doe"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="(555) 123-4567"
            />
          </div>
        </div>

        <div>
          <label htmlFor="serviceType" className="block text-sm font-medium text-foreground mb-2">
            Service Type
          </label>
          <select
            id="serviceType"
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="general">General Inquiry</option>
            <option value="design">Web Design</option>
            <option value="development">Development</option>
            <option value="consulting">Consulting</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="How can we help?"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            placeholder="Tell us more about your project..."
          />
        </div>

        <div>
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground disabled:opacity-50"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </Button>
        </div>

        {submitted && (
          <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-700 dark:text-green-400">
            Thank you! We&apos;ve received your message and will get back to you shortly.
          </div>
        )}
      </form>

      {/* Contact Info */}
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
          <p className="text-muted-foreground mb-8">
            Have a question or ready to start your project? I&apos;d love to hear from you. Fill out the form and
            I&apos;ll respond within 24 hours.
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <Mail className="w-6 h-6 text-primary shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-foreground mb-1">Email</h4>
              <a href="mailto:esgrespin1255@outlook.com" className="text-muted-foreground hover:text-primary transition-colors">
                esgrespin1255@outlook.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Phone className="w-6 h-6 text-primary shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-foreground mb-1">Phone</h4>
              <a href="tel:+19141500043" className="text-muted-foreground hover:text-primary transition-colors">
                +1 (914) 150-0043
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-foreground mb-1">Location</h4>
              <p className="text-muted-foreground">Downey, CA • Remote Available</p>
            </div>
          </div>
        </div>

        {/* Working Hours */}
        <div className="bg-card border border-border rounded-lg p-6">
          <h4 className="font-semibold text-foreground mb-4">Working Hours</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Monday - Friday</span>
              <span className="text-foreground">9:00 AM - 6:00 PM PST</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Saturday - Sunday</span>
              <span className="text-foreground">By appointment</span>
            </div>
          </div>
        </div>

        {/* Response Time */}
        <div className="bg-muted border border-border rounded-lg p-6">
          <h4 className="font-semibold text-foreground mb-2">Response Time</h4>
          <p className="text-sm text-muted-foreground">
            I aim to respond to all inquiries within 24 business hours. For urgent matters, please call directly.
          </p>
        </div>
      </div>
    </div>
  )
}

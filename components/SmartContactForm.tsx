'use client'

import { useState } from 'react'

interface FormData {
  name: string
  email: string
  phone: string
  businessName?: string
  service: string
  message: string
}

type ContactMethod = 'whatsapp' | 'email' | 'call'

const services = [
  'Tax Compliance & Filing',
  'Financial Audit Preparation',
  'Business Registration',
  'Accounting Services',
  'Financial Planning',
  'Payroll Management',
  'Other',
]

const quickMessages = [
  'I need help with tax compliance',
  "I'm preparing for an audit",
  'I want to improve cash flow',
  "I'm planning business growth",
]

export default function SmartContactForm() {
  const [contactMethod, setContactMethod] = useState<ContactMethod>('whatsapp')
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    service: '',
    message: '',
  })
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^[0-9+\s()-]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const formatWhatsAppMessage = (data: FormData): string => {
    const message = `Hello, I would like to inquire about your services.

*Contact Information:*
👤 Name: ${data.name}
📧 Email: ${data.email}
📱 Phone: ${data.phone}${data.businessName ? `\n🏢 Business: ${data.businessName}` : ''}

*Service Interest:*
${data.service}

*Message:*
${data.message}

I look forward to hearing from you!`

    return encodeURIComponent(message)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    if (contactMethod === 'whatsapp') {
      // Format WhatsApp message
      const whatsappMessage = formatWhatsAppMessage(formData)
      const whatsappNumber = '254702491439' // Remove + and spaces
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

      // Open WhatsApp
      window.open(whatsappUrl, '_blank')
    } else if (contactMethod === 'email') {
      // Format email
      const subject = encodeURIComponent(`Consultation Request: ${formData.service}`)
      const emailBody = formatWhatsAppMessage(formData)
      const emailUrl = `mailto:financialbeconconsulting@gmail.com?subject=${subject}&body=${encodeURIComponent(emailBody)}`
      
      window.location.href = emailUrl
    } else if (contactMethod === 'call') {
      // Open phone dialer
      window.location.href = 'tel:+254754029431'
    }

    // Show success message
    setShowSuccess(true)

    // Reset form after a delay
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        businessName: '',
        service: '',
        message: '',
      })
      setErrors({})
      setIsSubmitting(false)
      setShowSuccess(false)
    }, 5000)
  }

  const handleQuickMessage = (message: string) => {
    setFormData((prev) => ({ ...prev, message }))
    // Clear error if exists
    if (errors.message) {
      setErrors((prev) => ({ ...prev, message: undefined }))
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-emerald/10">
      {/* Success Message */}
      {showSuccess && (
        <div className="mb-6 p-6 bg-gradient-to-r from-emerald/10 to-emerald/5 border-2 border-emerald rounded-xl animate-fade-in">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-emerald rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-bold text-deep-blue mb-2">Thank you for reaching out!</h4>
              <p className="text-text-primary">
                A member of our advisory team will contact you shortly.
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-emerald/10 rounded-lg flex items-center justify-center">
            <svg
              className="w-6 h-6 text-emerald"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-deep-blue">Get in Touch</h3>
            <p className="text-sm text-text-secondary">Choose how you&apos;d like to connect with us</p>
          </div>
        </div>

        {/* Contact Method Selector */}
        <div className="mb-6">
          <p className="text-sm font-semibold text-deep-blue mb-3">Choose how you&apos;d like to connect with us:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              type="button"
              onClick={() => setContactMethod('whatsapp')}
              className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                contactMethod === 'whatsapp'
                  ? 'border-emerald bg-emerald/10 shadow-lg transform scale-105'
                  : 'border-soft-grey bg-light-grey hover:border-emerald/50 hover:shadow-md'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  contactMethod === 'whatsapp' ? 'bg-emerald text-white' : 'bg-emerald/10 text-emerald'
                }`}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <span className="font-bold text-deep-blue">WhatsApp Chat</span>
              </div>
              <p className="text-xs text-text-secondary">Fastest response</p>
            </button>

            <button
              type="button"
              onClick={() => setContactMethod('email')}
              className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                contactMethod === 'email'
                  ? 'border-emerald bg-emerald/10 shadow-lg transform scale-105'
                  : 'border-soft-grey bg-light-grey hover:border-emerald/50 hover:shadow-md'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  contactMethod === 'email' ? 'bg-emerald text-white' : 'bg-emerald/10 text-emerald'
                }`}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="font-bold text-deep-blue">Email Consultation</span>
              </div>
              <p className="text-xs text-text-secondary">Detailed inquiry</p>
            </button>

            <button
              type="button"
              onClick={() => setContactMethod('call')}
              className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                contactMethod === 'call'
                  ? 'border-emerald bg-emerald/10 shadow-lg transform scale-105'
                  : 'border-soft-grey bg-light-grey hover:border-emerald/50 hover:shadow-md'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  contactMethod === 'call' ? 'bg-emerald text-white' : 'bg-emerald/10 text-emerald'
                }`}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="font-bold text-deep-blue">Schedule a Call</span>
              </div>
              <p className="text-xs text-text-secondary">Direct conversation</p>
            </button>
          </div>
        </div>

        {/* Confidentiality Note */}
        <div className="mb-6 p-4 bg-gradient-to-r from-deep-blue/5 to-emerald/5 rounded-xl border border-emerald/20">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-10 h-10 bg-emerald/10 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-deep-blue mb-1">🔒 All consultations are confidential</p>
              <p className="text-xs text-text-secondary">Your information is handled securely and professionally.</p>
            </div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-deep-blue mb-2">
            Full Name <span className="text-emerald">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald/20 ${
              errors.name
                ? 'border-red-300 bg-red-50'
                : 'border-soft-grey bg-light-grey focus:border-emerald'
            }`}
            placeholder="Enter your full name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-deep-blue mb-2">
            Email Address <span className="text-emerald">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald/20 ${
              errors.email
                ? 'border-red-300 bg-red-50'
                : 'border-soft-grey bg-light-grey focus:border-emerald'
            }`}
            placeholder="your.email@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.email}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-deep-blue mb-2">
            Phone Number <span className="text-emerald">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald/20 ${
              errors.phone
                ? 'border-red-300 bg-red-50'
                : 'border-soft-grey bg-light-grey focus:border-emerald'
            }`}
            placeholder="+254 700 000 000"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.phone}
            </p>
          )}
        </div>

        {/* Business Name (Optional) */}
        <div>
          <label htmlFor="businessName" className="block text-sm font-semibold text-deep-blue mb-2">
            Business Name <span className="text-text-secondary text-xs">(Optional)</span>
          </label>
          <input
            type="text"
            id="businessName"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border-2 border-soft-grey bg-light-grey focus:border-emerald focus:outline-none focus:ring-2 focus:ring-emerald/20 transition-all duration-300"
            placeholder="Your business name"
          />
        </div>

        {/* Service */}
        <div>
          <label htmlFor="service" className="block text-sm font-semibold text-deep-blue mb-2">
            Service of Interest <span className="text-emerald">*</span>
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald/20 ${
              errors.service
                ? 'border-red-300 bg-red-50'
                : 'border-soft-grey bg-light-grey focus:border-emerald'
            }`}
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.service}
            </p>
          )}
        </div>

        {/* Quick Message Templates */}
        <div>
          <label className="block text-sm font-semibold text-deep-blue mb-2">
            Quick Message Templates <span className="text-text-secondary text-xs font-normal">(Click to autofill)</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
            {quickMessages.map((msg, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleQuickMessage(msg)}
                className="px-4 py-2 text-sm text-left bg-light-grey hover:bg-emerald/10 border border-soft-grey hover:border-emerald rounded-lg transition-all duration-300 text-text-primary hover:text-emerald"
              >
                {msg}
              </button>
            ))}
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-deep-blue mb-2">
            Message <span className="text-emerald">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald/20 resize-none ${
              errors.message
                ? 'border-red-300 bg-red-50'
                : 'border-soft-grey bg-light-grey focus:border-emerald'
            }`}
            placeholder="Tell us about your needs or questions..."
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-8 py-4 bg-gradient-to-r from-emerald via-emerald to-emerald-dark hover:from-emerald hover:via-emerald-light hover:to-emerald text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>
                {contactMethod === 'whatsapp' && 'Opening WhatsApp...'}
                {contactMethod === 'email' && 'Opening Email...'}
                {contactMethod === 'call' && 'Opening Phone...'}
              </span>
            </>
          ) : (
            <>
              {contactMethod === 'whatsapp' && (
                <>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span>Send via WhatsApp</span>
                </>
              )}
              {contactMethod === 'email' && (
                <>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Send via Email</span>
                </>
              )}
              {contactMethod === 'call' && (
                <>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Call Us Now</span>
                </>
              )}
            </>
          )}
        </button>

        {/* Info Note */}
        <p className="text-xs text-text-secondary text-center flex items-center justify-center gap-2">
          <svg className="w-4 h-4 text-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {contactMethod === 'whatsapp' && 'Your message will open in WhatsApp with all details pre-filled'}
          {contactMethod === 'email' && 'Your message will open in your email client with all details pre-filled'}
          {contactMethod === 'call' && 'Clicking will dial our business line directly'}
        </p>
      </form>
    </div>
  )
}

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import emailjs from 'emailjs-com'
import { FaUser, FaEnvelope, FaPhone, FaComment, FaCheckCircle, FaSpinner } from 'react-icons/fa'

const ContactPage = () => {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid'
    if (!formData.message.trim()) newErrors.message = 'Message is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) return

    setStatus('loading')

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id',
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key'
      )

      setStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })

      setTimeout(() => {
        setStatus('idle')
      }, 5000)
    } catch (error) {
      setStatus('error')
      console.error('EmailJS Error:', error)
    }
  }

  return (
    <div className="min-h-screen bg-neutral-cream pt-20">
      <div className="container-custom py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="section-title">{t('contact.title')}</h1>
          <p className="section-subtitle">
            {t('contact.description')}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">
                  {t('contact.name')}
                </label>
                <div className="relative">
                  <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t('contact.typename')}
                    className={`input pl-12 ${errors.name ? 'input-error' : ''}`}
                    disabled={status === 'loading'}
                  />
                </div>
                {errors.name && (
                  <p className="text-accent-error text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">
                  {t('contact.email')}
                </label>
                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t('contact.typeemail')}
                    className={`input pl-12 ${errors.email ? 'input-error' : ''}`}
                    disabled={status === 'loading'}
                  />
                </div>
                {errors.email && (
                  <p className="text-accent-error text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Phone Field */}
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">
                  {t('contact.phone')} <span className="text-neutral-400 text-xs">{t('contact.require')}</span>
                </label>
                <div className="relative">
                  <FaPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t('contact.typephone')}
                    className="input pl-12"
                    disabled={status === 'loading'}
                  />
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">
                  {t('contact.message')}
                </label>
                <div className="relative">
                  <FaComment className="absolute left-4 top-4 text-neutral-400" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t('contact.typemessage')}
                    className={`textarea pl-12 ${errors.message ? 'input-error' : ''}`}
                    rows="5"
                    disabled={status === 'loading'}
                  />
                </div>
                {errors.message && (
                  <p className="text-accent-error text-sm mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary w-full text-lg"
              >
                {status === 'loading' ? (
                  <>
                    <FaSpinner className="animate-spin mr-2" />
                    Sending...
                  </>
                ) : (
                  t('contact.submit')
                )}
              </button>

              {/* Status Messages */}
              {status === 'success' && (
                <div className="flex items-center space-x-2 text-accent-success bg-green-50 rounded-lg p-4 animate-slide-down">
                  <FaCheckCircle className="flex-shrink-0" />
                  <p className="text-sm font-medium">{t('contact.thankYou')}</p>
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-center space-x-2 text-accent-error bg-red-50 rounded-lg p-4 animate-slide-down">
                  <span className="flex-shrink-0">⚠️</span>
                  <p className="text-sm font-medium">Something went wrong. Please try again.</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage

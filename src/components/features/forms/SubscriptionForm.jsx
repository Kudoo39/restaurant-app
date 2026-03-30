import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import emailjs from 'emailjs-com'
import { FaEnvelope, FaCheckCircle, FaSpinner } from 'react-icons/fa'

const SubscriptionForm = () => {
  const { t } = useTranslation()
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle, loading, success, error
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!email || !email.includes('@')) {
      setStatus('error')
      setMessage('Please enter a valid email address')
      return
    }

    setStatus('loading')

    try {
      // Use environment variables for EmailJS credentials
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id',
        { user_email: email },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key'
      )

      setStatus('success')
      setMessage(t('subscriptionForm.thankYou'))
      setEmail('')

      // Reset after 5 seconds
      setTimeout(() => {
        setStatus('idle')
        setMessage('')
      }, 5000)
    } catch (error) {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
      console.error('EmailJS Error:', error)
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 max-w-2xl mx-auto">
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
          <FaEnvelope className="text-3xl text-primary" />
        </div>
        <h3 className="text-2xl md:text-3xl font-heading font-bold text-neutral-black mb-2">
          {t('subscriptionForm.title')}
        </h3>
        <p className="text-neutral-600">
          {t('subscriptionForm.description')}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t('subscriptionForm.placeholder')}
            className="input flex-1"
            disabled={status === 'loading'}
            required
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="btn-primary whitespace-nowrap"
          >
            {status === 'loading' ? (
              <>
                <FaSpinner className="animate-spin mr-2" />
                Subscribing...
              </>
            ) : (
              t('subscriptionForm.buttonText')
            )}
          </button>
        </div>

        {/* Status Messages */}
        {status === 'success' && (
          <div className="flex items-center space-x-2 text-accent-success bg-green-50 rounded-lg p-4 animate-slide-down">
            <FaCheckCircle className="flex-shrink-0" />
            <p className="text-sm font-medium">{message}</p>
          </div>
        )}

        {status === 'error' && (
          <div className="flex items-center space-x-2 text-accent-error bg-red-50 rounded-lg p-4 animate-slide-down">
            <span className="flex-shrink-0">⚠️</span>
            <p className="text-sm font-medium">{message}</p>
          </div>
        )}
      </form>
    </div>
  )
}

export default SubscriptionForm

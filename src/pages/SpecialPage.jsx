import { useTranslation } from 'react-i18next'
import { FaStar, FaGift, FaPercent } from 'react-icons/fa'

const SpecialPage = () => {
  const { t } = useTranslation()

  const specials = [
    {
      icon: FaGift,
      title: t('special.comingSoon.title'),
      description: t('special.comingSoon.description'),
      color: 'bg-green-500',
      gradient: 'from-green-500 to-green-600',
    },
    {
      icon: FaStar,
      title: t('special.loyalty.title'),
      description: t('special.loyalty.description'),
      color: 'bg-primary',
      gradient: 'from-primary to-primary-dark',
    },
  ]

  return (
    <div className="min-h-screen bg-neutral-cream pt-20">
      <div className="container-custom py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <FaGift className="text-primary" />
            <span className="text-sm font-semibold text-primary">{t('special.badge')}</span>
          </div>
          <h1 className="section-title">{t('special.title')}</h1>
          <p className="section-subtitle">
            {t('special.subtitle')}
          </p>
        </div>

        {/* Specials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {specials.map((special, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`bg-gradient-to-br ${special.gradient} p-8 text-center`}>
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto shadow-xl">
                  <special.icon className="text-4xl text-neutral-black" />
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-heading font-bold text-neutral-black mb-3">
                  {special.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {special.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-warm rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-black mb-4">
              {t('special.cta.title')}
            </h2>
            <p className="text-lg text-neutral-800 mb-8 max-w-2xl mx-auto">
              {t('special.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wolt.com/en/fin/turku/restaurant/saigon-sandwich-bakery"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-neutral-black text-primary hover:bg-neutral-900 hover:shadow-2xl"
              >
                {t('special.cta.wolt')}
              </a>
              <a
                href="https://www.foodora.fi/restaurant/saigon-sandwich-bakery"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-white text-neutral-black hover:bg-neutral-100 hover:shadow-2xl"
              >
                {t('special.cta.foodora')}
              </a>
            </div>
          </div>
        </div>

        {/* Terms */}
        <div className="max-w-2xl mx-auto mt-12 text-center">
          <p className="text-sm text-neutral-500">
            {t('special.terms')}
          </p>
        </div>
      </div>
    </div>
  )
}

export default SpecialPage

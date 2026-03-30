import { useTranslation } from 'react-i18next'
import { FaClock, FaMapMarkerAlt } from 'react-icons/fa'

const HoursPage = () => {
  const { t } = useTranslation()

  const orderingPlatforms = [
    {
      name: 'Wolt',
      url: 'https://wolt.com/en/fin/turku/restaurant/saigon-sandwich-bakery',
      color: 'bg-blue-500',
      hoverColor: 'hover:bg-blue-600',
    },
    {
      name: 'Foodora',
      url: 'https://www.foodora.fi/restaurant/saigon-sandwich-bakery',
      color: 'bg-pink-500',
      hoverColor: 'hover:bg-pink-600',
    },
  ]

  return (
    <div className="min-h-screen bg-neutral-cream pt-20">
      <div className="container-custom py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="section-title">{t('hour.title')}</h1>
          <p className="section-subtitle">
            {t('hour.operatingHoursText')}
          </p>
        </div>

        {/* Hours Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-warm p-8 text-center">
              <FaClock className="text-5xl text-neutral-black mx-auto mb-4" />
              <h2 className="text-3xl font-heading font-bold text-neutral-black">
                Opening Hours
              </h2>
            </div>

            <div className="p-8 space-y-6">
              {/* Open Days */}
              <div className="flex items-start space-x-4 p-6 bg-green-50 rounded-xl border-2 border-green-200">
                <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <FaClock className="text-white text-xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-heading font-bold text-neutral-black mb-2">
                    {t('hour.operatingDays1')}
                  </h3>
                  <p className="text-2xl font-bold text-green-600">
                    10:30 - 18:30
                  </p>
                </div>
              </div>

              {/* Closed Days */}
              <div className="flex items-start space-x-4 p-6 bg-neutral-100 rounded-xl border-2 border-neutral-300">
                <div className="flex-shrink-0 w-12 h-12 bg-neutral-400 rounded-full flex items-center justify-center">
                  <FaClock className="text-white text-xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-heading font-bold text-neutral-black mb-2">
                    {t('hour.operatingDays2')}
                  </h3>
                  <p className="text-2xl font-bold text-neutral-600">
                    {t('hour.operatingHours')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Order Online Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-neutral-black rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              {t('hour.orderAvailabilityText')}
            </h2>
            <p className="text-neutral-400 mb-8 max-w-2xl mx-auto">
              Order your favorite Vietnamese dishes for delivery or pickup through our partner platforms
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {orderingPlatforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${platform.color} ${platform.hoverColor} text-white font-bold text-xl py-6 px-8 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-3`}
                >
                  <span>{t(`hour.orderOn${platform.name}`)}</span>
                  <span className="text-2xl">→</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Location Info */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <FaMapMarkerAlt className="text-4xl text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-heading font-bold text-neutral-black mb-2">
              {t('footer.address.title')}
            </h3>
            <p className="text-lg text-neutral-600">
              Aninkaistenkatu 16 {t('footer.address.description')}
            </p>
            <p className="text-lg text-neutral-600">
              {t('footer.address.line')}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HoursPage

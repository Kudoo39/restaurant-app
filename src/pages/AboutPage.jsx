import { useTranslation } from 'react-i18next'

const AboutPage = () => {
  const { t } = useTranslation()

  const team = [
    {
      name: 'Kim Huong Nguyen',
      position: t('about.founder.position'),
      description: t('about.founder.description'),
      image: '/src/assets/logo1.jpg',
    },
    {
      name: 'Thuy Tien Nguyen',
      position: t('about.staff.position'),
      description: t('about.staff.description'),
      image: '/src/assets/logo1.jpg',
    },
  ]

  return (
    <div className="min-h-screen bg-neutral-cream pt-20">
      <div className="container-custom py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="section-title">{t('about.title')}</h1>
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-6">
            <p className="text-lg leading-relaxed text-neutral-700">
              {t('about.description1')}
            </p>
            <p className="text-lg leading-relaxed text-neutral-700">
              {t('about.description2')}
            </p>
            <p className="text-lg leading-relaxed text-neutral-700">
              {t('about.description3')}
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-heading font-bold text-center text-neutral-black mb-12">
            {t('about.leadershipTitle')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-64 bg-gradient-warm flex items-center justify-center">
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-xl">
                    <span className="text-5xl font-heading font-bold text-primary">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-heading font-bold text-neutral-black mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-semibold mb-4">
                    {member.position}
                  </p>
                  <p className="text-neutral-600 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-neutral-black rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-8">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <div className="text-5xl">🌟</div>
                <h3 className="text-xl font-heading font-bold text-primary">
                  Authenticity
                </h3>
                <p className="text-neutral-400">
                  Traditional Vietnamese recipes passed down through generations
                </p>
              </div>
              <div className="space-y-3">
                <div className="text-5xl">🌱</div>
                <h3 className="text-xl font-heading font-bold text-primary">
                  Fresh Ingredients
                </h3>
                <p className="text-neutral-400">
                  We use only the freshest, highest quality ingredients daily
                </p>
              </div>
              <div className="space-y-3">
                <div className="text-5xl">❤️</div>
                <h3 className="text-xl font-heading font-bold text-primary">
                  Made with Love
                </h3>
                <p className="text-neutral-400">
                  Every dish is prepared with care and passion for Vietnamese cuisine
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage

import { useTranslation } from 'react-i18next'
import Hero from '../components/features/hero/Hero'
import img1 from '../assets/vegan.jpg'
import img2 from '../assets/pho.jpg'
import img3 from '../assets/logo1.jpg'
import SubscriptionForm from '../components/features/forms/SubscriptionForm'
import { FaQuoteLeft } from 'react-icons/fa'

const HomePage = () => {
  const { t } = useTranslation()

  const features = [
    {
      image: img1,
      title: 'Banh Mi',
      description: t('home.banhmiDescription'),
      gradient: 'from-orange-500/20 to-transparent',
    },
    {
      image: img2,
      title: 'Pho',
      description: t('home.phoDescription'),
      gradient: 'from-red-500/20 to-transparent',
    },
    {
      image: img3,
      title: 'Kim Huong Nguyen',
      description: t('home.ownerDescription1'),
      description2: t('home.ownerDescription2'),
      gradient: 'from-primary/20 to-transparent',
      isOwner: true,
    },
  ]

  const testimonials = [
    {
      text: t('feedback.customers1'),
      author: 'Mika L.',
      rating: 5,
    },
    {
      text: t('feedback.customers2'),
      author: 'Anna K.',
      rating: 5,
    },
    {
      text: t('feedback.customers3'),
      author: 'Petri S.',
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Subscription Form */}
      <div className="py-12 bg-neutral-100">
        <div className="container-custom">
          <SubscriptionForm />
        </div>
      </div>

      {/* Features Section */}
      <section className="section bg-neutral-cream">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Specialties</h2>
            <p className="section-subtitle">
              Discover the authentic flavors that make us special
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card-warm group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-t ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10`} />
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className={`w-full ${feature.isOwner ? 'h-64' : 'h-56'} object-cover transition-transform duration-700 group-hover:scale-110`}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-heading font-bold text-neutral-black mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed mb-2">
                    {feature.description}
                  </p>
                  {feature.description2 && (
                    <p className="text-neutral-600 leading-relaxed italic">
                      "{feature.description2}"
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-neutral-black text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              {t('feedback.title')}
            </h2>
            <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto">
              See what our customers are saying about us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-neutral-900 rounded-xl p-6 border border-neutral-800 hover:border-primary/50 transition-all duration-300 hover:shadow-warm"
              >
                <FaQuoteLeft className="text-3xl text-primary mb-4 opacity-50" />
                <p className="text-neutral-300 leading-relaxed mb-4">
                  {testimonial.text}
                </p>
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-primary">{testimonial.author}</p>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-primary">★</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-warm text-neutral-black">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Ready to Experience Authentic Vietnamese Cuisine?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Visit us today or order online through Wolt or Foodora
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wolt.com/en/fin/turku/restaurant/saigon-sandwich-bakery"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-neutral-black text-primary hover:bg-neutral-900 hover:shadow-2xl"
            >
              Order on Wolt
            </a>
            <a
              href="https://www.foodora.fi/restaurant/saigon-sandwich-bakery"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-white text-neutral-black hover:bg-neutral-100 hover:shadow-2xl"
            >
              Order on Foodora
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage

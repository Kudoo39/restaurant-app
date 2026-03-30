import { useTranslation } from 'react-i18next'
import { FaArrowRight, FaUtensils, FaLeaf, FaFire } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Hero = () => {
  const { t } = useTranslation()

  const features = [
    { icon: FaUtensils, text: 'Authentic Vietnamese' },
    { icon: FaLeaf, text: 'Fresh Ingredients' },
    { icon: FaFire, text: 'Made to Order' },
  ]

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-black via-neutral-900 to-neutral-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffc27d' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-black via-transparent to-transparent" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-primary">Turku's Authentic Vietnamese Restaurant</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 animate-slide-up">
            {t('header.title')}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-neutral-300 mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Experience the authentic taste of Vietnam with our freshly baked <span className="text-primary font-semibold">Bánh Mì</span> and traditional dishes
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-full px-4 py-2 hover:border-primary/50 transition-all duration-300"
              >
                <feature.icon className="text-primary text-lg" />
                <span className="text-sm font-medium text-neutral-300">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Link to="/menu" className="btn-primary group">
              View Menu
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/hour" className="btn-outline">
              Order Now
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
            <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
    </section>
  )
}

export default Hero

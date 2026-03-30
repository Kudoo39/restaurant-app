import { Route, Routes, Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import MainMenu from '../components/features/menu/MainMenu'
import BaoMenu from '../components/features/menu/BaoMenu'
import SaladMenu from '../components/features/menu/SaladMenu'
import DrinkMenu from '../components/features/menu/DrinkMenu'
import SubscriptionForm from '../components/features/forms/SubscriptionForm'
import { FaFacebook } from 'react-icons/fa'

const MenuPage = () => {
  const { t } = useTranslation()
  const location = useLocation()

  const categories = [
    { path: '', label: t('menu.main'), icon: '🥖' },
    { path: 'bao', label: t('menu.bao'), icon: '🥟' },
    { path: 'salad', label: t('menu.salad'), icon: '🥗' },
    { path: 'drink', label: t('menu.drink'), icon: '☕' },
  ]

  const isActive = (path) => {
    if (path === '' && location.pathname === '/') {
      return true
    }
    return location.pathname === `/${path}`
  }

  return (
    <div className="min-h-screen bg-neutral-cream pt-20">
      {/* Subscription Form */}
      <div className="py-12 bg-neutral-100">
        <div className="container-custom">
          <SubscriptionForm />
        </div>
      </div>

      {/* Menu Header */}
      <section className="section-title-area bg-gradient-to-b from-neutral-100 to-neutral-cream py-12">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-neutral-black mb-4">
            Our Menu
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
            Explore our authentic Vietnamese dishes, made fresh daily with traditional recipes
          </p>
        </div>
      </section>

      {/* Category Navigation */}
      <div className="sticky top-20 z-40 bg-white shadow-md border-b border-neutral-200">
        <div className="container-custom">
          <div className="flex items-center justify-center gap-2 py-4 overflow-x-auto scrollbar-hide">
            {categories.map((category) => (
              <Link
                key={category.path}
                to={category.path}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold text-base transition-all duration-300 whitespace-nowrap ${
                  isActive(category.path)
                    ? 'bg-primary text-neutral-black shadow-warm scale-105'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 hover:scale-105'
                }`}
              >
                <span className="text-xl">{category.icon}</span>
                <span>{category.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <div className="container-custom py-12">
        <Routes>
          <Route index element={<MainMenu />} />
          <Route path="bao" element={<BaoMenu />} />
          <Route path="salad" element={<SaladMenu />} />
          <Route path="drink" element={<DrinkMenu />} />
        </Routes>
      </div>

      {/* Facebook Feed Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-blue-50 rounded-full px-4 py-2 mb-4">
              <FaFacebook className="text-blue-600 text-xl" />
              <span className="font-semibold text-blue-600">{t('menu.news')}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-black mb-2">
              Latest Updates
            </h2>
            <p className="text-neutral-600">
              Follow us on Facebook for daily specials and news
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-neutral-100 rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fsaigonbakeryturku&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="100%"
                height="600"
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MenuPage

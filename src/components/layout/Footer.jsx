import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FaFacebook, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

const Footer = () => {
  const { t } = useTranslation()

  const socialLinks = [
    { icon: FaFacebook, href: 'https://www.facebook.com/saigonbakeryturku', label: 'Facebook' },
    { icon: FaInstagram, href: 'https://www.instagram.com/saigonbakeryturku', label: 'Instagram' },
  ]

  const quickLinks = [
    { path: '/', label: t('nav.menu') },
    { path: '/hour', label: t('nav.hour') },
    { path: '/about', label: t('nav.about') },
    { path: '/contact', label: t('nav.contact') },
  ]

  return (
    <footer className="bg-neutral-black text-neutral-300 pt-16 pb-8">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-gradient-warm rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-neutral-black">S</span>
              </div>
              <span className="text-xl font-heading font-bold text-primary">
                Saigon Sandwich
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Authentic Vietnamese flavors in the heart of Turku. Experience the taste of Saigon with our freshly baked bánh mì and traditional dishes.
            </p>
            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-primary hover:bg-primary hover:text-neutral-black transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="text-lg" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-primary transition-colors duration-300 inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary mr-0 group-hover:mr-2 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-heading font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm">
                <FaMapMarkerAlt className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Aninkaistenkatu 16</p>
                  <p>{t('footer.address.description')}</p>
                  <p>{t('footer.address.line')}</p>
                </div>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <FaPhone className="text-primary flex-shrink-0" />
                <a href="tel:+358401234567" className="hover:text-primary transition-colors">
                  +358 40 166 7333
                </a>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <FaEnvelope className="text-primary flex-shrink-0" />
                <a href="mailto:saigonsandwichbakery@gmail.com" className="hover:text-primary transition-colors">
                  saigonsandwichbakery@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-heading font-bold text-white mb-4">Opening Hours</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <FaClock className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">{t('hour.operatingDays1')}</p>
                  <p className="text-primary">10:30 - 18:30</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaClock className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">{t('hour.operatingDays2')}</p>
                  <p className="text-neutral-500">{t('hour.operatingHours')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-neutral-500">
              © {new Date().getFullYear()} Saigon Sandwich Bakery. All rights reserved.
            </p>
            {/* <div className="flex items-center space-x-6 text-sm">
              <Link to="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

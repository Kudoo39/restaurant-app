import wolt from '../../assets/wolt.jpg'
import foodora from '../../assets/foodora.jpg'
import './Hour.css'
import { useTranslation } from 'react-i18next'
import SubscriptionForm from '../SubscriptionForm'

const Hour = () => {
  const { t } = useTranslation()

  return (
    <div className="hour-container">
      <SubscriptionForm />
      <div className="container">
        <h2>{t('hour.title')}</h2>
        <p>{t('hour.operatingHoursText')}</p>
        <ul>
          <li>
            {t('hour.operatingDays1')} <h6>10:30 AM - 6:30 PM</h6>
          </li>
          <li>
            {t('hour.operatingDays2')} <h6>{t('hour.operatingHours')}</h6>
          </li>
        </ul>
        <p>{t('hour.orderAvailabilityText')}</p>
        <ul className="logo-links">
          <li>
            <a
              href="https://wolt.com/en/fin/turku/restaurant/saigon-sandwich"
              target="_blank"
              rel="noopener noreferrer"
              className="logo-link wolt-logo"
            >
              <img src={wolt} alt="Wolt Logo" />
              <span>{t('hour.orderOnWolt')}</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.foodora.fi/en/restaurant/s6bc/saigon-sandwich"
              target="_blank"
              rel="noopener noreferrer"
              className="logo-link foodora-logo"
            >
              <img src={foodora} alt="Foodora Logo" />
              <span>{t('hour.orderOnFoodora')}a</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Hour

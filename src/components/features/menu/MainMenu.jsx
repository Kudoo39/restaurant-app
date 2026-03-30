import { useTranslation } from 'react-i18next'
import MenuCard from './MenuCard'
import img1 from '../../../assets/patee.jpg'
import img2 from '../../../assets/grill.jpg'
import img3 from '../../../assets/beef.jpg'
import img4 from '../../../assets/kanacurry.jpg'
import img5 from '../../../assets/bbq.jpg'
import img6 from '../../../assets/vegan.jpg'
import img8 from '../../../assets/grilled_chicken.jpg'
import img9 from '../../../assets/porkbelly.jpg'
import img11 from '../../../assets/lemo_harka.jpeg'

const MainMenu = () => {
  const { t } = useTranslation()

  const menuItems = [
    {
      id: 1,
      name: t('main.names11'),
      description: t('main.descriptions11'),
      price: '€9.50',
      image: img11,
      featured: true,
    },
    {
      id: 2,
      name: t('main.names1'),
      description: t('main.descriptions1'),
      price: '€8.50',
      image: img1,
    },
    {
      id: 3,
      name: t('main.names2'),
      description: t('main.descriptions2'),
      price: '€8.50',
      image: img2,
      featured: true,
    },
    {
      id: 4,
      name: t('main.names3'),
      description: t('main.descriptions3'),
      price: '€9.50',
      image: img3,
      isSpicy: true,
    },
    {
      id: 5,
      name: t('main.names4'),
      description: t('main.descriptions4'),
      price: '€8.50',
      image: img4,
    },
    {
      id: 6,
      name: t('main.names5'),
      description: t('main.descriptions5'),
      price: '€7.95',
      image: img5,
    },
    {
      id: 7,
      name: t('main.names6'),
      description: t('main.descriptions6'),
      price: '€7.50',
      image: img6,
      isVegan: true,
    },
    {
      id: 9,
      name: t('main.names8'),
      description: t('main.descriptions8'),
      price: '€8.50',
      image: img8,
    },
    {
      id: 10,
      name: t('main.names9'),
      description: t('main.descriptions9'),
      price: '€8.95',
      image: img9,
      isSpicy: true,
    },
  ]

  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-black mb-2">
          Main Dishes
        </h2>
        <p className="text-neutral-600">
          Our signature Bánh Mì sandwiches and Vietnamese specialties
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item, index) => (
          <div
            key={item.id}
            className="animate-slide-up"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <MenuCard item={item} featured={item.featured} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default MainMenu

import { useTranslation } from 'react-i18next'
import MenuCard from './MenuCard'
import img1 from '../../../assets/cola.jpg'
import img2 from '../../../assets/cola-zero.jpg'
import img3 from '../../../assets/jaffa.jpg'
import img4 from '../../../assets/pepsi.jpg'
import img5 from '../../../assets/coffee1.jpg'
import img6 from '../../../assets/water.jpg'

const DrinkMenu = () => {
  const { t } = useTranslation()

  const menuItems = [
    {
      id: 5,
      name: t('drink.cafe'),
      description: t('drink.descriptions5'),
      price: '€4.95',
      image: img5,
      featured: true,
    },
    {
      id: 1,
      name: 'Coca Cola',
      description: t('drink.descriptions1'),
      price: '€1.80',
      image: img1,
    },
    {
      id: 2,
      name: 'Coca Cola Zero',
      description: t('drink.descriptions2'),
      price: '€1.80',
      image: img2,
    },
    {
      id: 3,
      name: 'Jaffa',
      description: t('drink.descriptions3'),
      price: '€1.80',
      image: img3,
    },
    {
      id: 4,
      name: 'Pepsi MAX',
      description: t('drink.descriptions4'),
      price: '€1.80',
      image: img4,
    },
    {
      id: 6,
      name: t('drink.water'),
      description: t('drink.descriptions6'),
      price: '€1.60',
      image: img6,
    },
  ]

  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-black mb-2">
          Beverages
        </h2>
        <p className="text-neutral-600">
          Refresh yourself with our selection of drinks and Vietnamese coffee
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

export default DrinkMenu

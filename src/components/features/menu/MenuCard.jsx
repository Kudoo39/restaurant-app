import { useTranslation } from 'react-i18next'
import { FaLeaf, FaFire, FaStar } from 'react-icons/fa'

const MenuCard = ({ item, featured = false }) => {
  const { t } = useTranslation()

  return (
    <div className={`menu-card ${featured ? 'ring-2 ring-primary' : ''}`}>
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="menu-card-image"
          loading="lazy"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {item.isVegan && (
            <span className="badge bg-green-500 text-white shadow-lg">
              <FaLeaf className="mr-1" />
              Vegan
            </span>
          )}
          {item.isSpicy && (
            <span className="badge bg-red-500 text-white shadow-lg">
              <FaFire className="mr-1" />
              Spicy
            </span>
          )}
          {featured && (
            <span className="badge bg-primary text-neutral-black shadow-lg">
              <FaStar className="mr-1" />
              Popular
            </span>
          )}
        </div>

        {/* Price Badge */}
        <div className="absolute bottom-3 right-3">
          <span className="bg-neutral-black/90 backdrop-blur-sm text-primary font-bold text-lg px-4 py-2 rounded-full shadow-lg">
            {item.price}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="menu-card-content">
        <h3 className="menu-card-title">{item.name}</h3>
        <p className="menu-card-description">{item.description}</p>
      </div>
    </div>
  )
}

export default MenuCard

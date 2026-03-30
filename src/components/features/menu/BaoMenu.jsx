import { useTranslation } from 'react-i18next'
import MenuCard from './MenuCard'
import img from '../../../assets/bao3.jpg'

const BaoMenu = () => {
  const { t } = useTranslation()

  const menuItems = [
    { id: 1, name: t('bao.names1'), price: '€5.50', image: img },
    { id: 2, name: t('bao.names2'), price: '€5.90', image: img, isSpicy: true },
    { id: 3, name: t('bao.names3'), price: '€5.50', image: img },
    { id: 4, name: t('bao.names4'), price: '€5.20', image: img, isVegan: true },
    { id: 5, name: t('bao.names5'), price: '€5.50', image: img },
  ]

  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-black mb-2">
          Bao Buns
        </h2>
        <p className="text-neutral-600">
          Fluffy steamed bao buns filled with Vietnamese flavors
        </p>
      </div>

      {/* Hero image + list layout for Bao */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Bao Hero Image */}
        <div className="rounded-2xl overflow-hidden shadow-xl sticky top-32 order-2 lg:order-1">
          <img
            src={img}
            alt="Bao Buns"
            className="w-full h-80 object-cover"
          />
          <div className="bg-neutral-black p-6 text-center">
            <p className="text-primary font-heading text-xl font-bold">
              Steamed to Perfection
            </p>
            <p className="text-neutral-400 text-sm mt-1">
              Soft, fluffy, and filled with authentic flavors
            </p>
          </div>
        </div>

        {/* Bao Menu List */}
        <div className="space-y-4 order-1 lg:order-2">
          {menuItems.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-xl p-5 shadow-md border border-neutral-200 hover:border-primary hover:shadow-warm transition-all duration-300 group animate-slide-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-neutral-500 font-mono text-sm">#{item.id}</span>
                    <h3 className="text-lg md:text-xl font-heading font-bold text-neutral-black group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                    {item.isVegan && (
                      <span className="badge bg-green-100 text-green-700 text-xs">🌱 Vegan</span>
                    )}
                    {item.isSpicy && (
                      <span className="badge bg-red-100 text-red-700 text-xs">🌶️ Spicy</span>
                    )}
                  </div>
                </div>
                <span className="text-2xl font-bold text-primary font-heading ml-4">
                  {item.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BaoMenu

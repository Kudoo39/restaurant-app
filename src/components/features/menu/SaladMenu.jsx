import { useTranslation } from 'react-i18next'
import img from '../../../assets/salad.jpg'

const SaladMenu = () => {
  const { t } = useTranslation()

  const menuItems = [
    { id: 1, name: t('salad.names1'), price: '€9.95' },
    { id: 2, name: t('salad.names2'), price: '€10.50', isSpicy: true },
    { id: 3, name: t('salad.names3'), price: '€9.95' },
    { id: 4, name: t('salad.names4'), price: '€8.95', isVegan: true },
    { id: 5, name: t('salad.names5'), price: '€9.95' },
  ]

  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-black mb-2">
          Salads
        </h2>
        <p className="text-neutral-600">
          Fresh Vietnamese-style salads with vibrant ingredients
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Salad Menu List */}
        <div className="space-y-4">
          {menuItems.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-xl p-5 shadow-md border border-neutral-200 hover:border-primary hover:shadow-warm transition-all duration-300 group animate-slide-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
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

        {/* Salad Hero Image */}
        <div className="rounded-2xl overflow-hidden shadow-xl sticky top-32">
          <img
            src={img}
            alt="Vietnamese Salad"
            className="w-full h-80 object-cover"
          />
          <div className="bg-neutral-black p-6 text-center">
            <p className="text-primary font-heading text-xl font-bold">
              Fresh & Vibrant
            </p>
            <p className="text-neutral-400 text-sm mt-1">
              Vietnamese-style salads packed with flavor
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SaladMenu

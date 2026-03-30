import img from '../../assets/salad.jpg'
import './Salad.css'
import { useTranslation } from 'react-i18next'

const Salad = () => {
  const { t } = useTranslation()

  const menuItems = [
    {
      id: 1,
      name: t('salad.names1'),
      price: '€9.95'
    },
    {
      id: 2,
      name: t('salad.names2'),
      price: '€10.50'
    },
    {
      id: 3,
      name: t('salad.names3'),
      price: '€9.95'
    },
    {
      id: 4,
      name: t('salad.names4'),
      price: '€8.95'
    },
    {
      id: 5,
      name: t('salad.names5'),
      price: '€9.95'
    }
  ]

  return (
    <div className='salad-menu-container'>
      <div className='salad-menu-items'>
        {menuItems.map((item) => (
          <div className='salad-menu-item' key={item.id}>
            <h3>
              {item.id}. {item.name}
            </h3>
            <h5>{item.price}</h5>
          </div>
        ))}
      </div>
      <div className='salad-image'>
        <img src={img} alt='Photo about Salad' />
      </div>
    </div>
  )
}

export default Salad

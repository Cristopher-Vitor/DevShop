import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import { FiShoppingCart } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Header = () => {
  const { cartAmount } = useContext(CartContext)

  return (
    <header className='bg-slate-200 w-full px-1'>
      <nav className='h-14 w-full max-w-7xl flex justify-between items-center px-5 mx-auto'>
        <Link className='font-bold text-3xl' to="/"> 
          PhoneShop
        </Link>
        <Link className='relative' to="/cart">
          <FiShoppingCart size={24} color="#121212"/>
          {cartAmount > 0 && (
            <span className='absolute -top-3 -right-3 px-2.5 bg-sky-500 rounded-full w-6 h-6 flex items-center justify-center text-white'>
              {cartAmount}
            </span>
          )}
        </Link>
      </nav>
    </header>

  )
}

export default Header
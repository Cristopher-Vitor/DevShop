import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import CartProvider from './Context/CartContext'

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <Router />
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
import { ReactNode, createContext, useState } from "react";
import { ProductProps } from "../Pages/Home";

interface CartProps{
  id: string;
  title: string;
  thumbnail: string;
  price: number;
  amount: number;
  total: number
}

interface CartContextData {
  cart: CartProps[];
  cartAmount: number;
  addItemCart: (newItem: ProductProps) => void;
}

export const CartContext = createContext({} as CartContextData)

function CartProvider({ children }: React.PropsWithChildren){
  const [cart, setCart] = useState<CartProps[]>([])
  
  function addItemCart(newItem: ProductProps){
    const indexItem = cart.findIndex(item => item.id === newItem.id)
    if(indexItem !== -1){
      const cartList = cart;
      const item = cartList[indexItem]

      item.amount += 1;
      item.total = item.amount * item.price

      setCart(cartList)
      return;
    }
    const data = {
      ...newItem,
      amount: 1,
      total: newItem.price
    }
      setCart(products => [...products, data])
  }

  return(
    <CartContext.Provider
      value={{
        cart, 
        cartAmount: cart.length,
        addItemCart
      }}
    >
      {children}
    </CartContext.Provider>
    )
}

export default CartProvider;
import { ReactNode, createContext, useState } from "react";

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
}

export const CartContext = createContext({} as CartContextData)

function CartProvider({ children }: React.PropsWithChildren){
  const [cart, setCart] = useState<CartProps[]>([]);
  return(
    <CartContext.Provider
      value={{
        cart, 
        cartAmount: cart.length
      }}
    >
      {children}
    </CartContext.Provider>
    )
}

export default CartProvider;
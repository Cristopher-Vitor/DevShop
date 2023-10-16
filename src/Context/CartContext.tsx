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
  removeItemCart: (product: CartProps) => void;
  total: string;
}

export const CartContext = createContext({} as CartContextData)

function CartProvider({ children }: React.PropsWithChildren){
  const [cart, setCart] = useState<CartProps[]>([]);
  const [total, setTotal] = useState("");
  
  function addItemCart(newItem: ProductProps){
    const indexItem = cart.findIndex(item => item.id === newItem.id)
    if(indexItem !== -1){
      const cartList = cart;
      const item = cartList[indexItem]

      item.amount += 1;
      item.total = item.amount * item.price

      setCart(cartList)
      totalResultCart(cartList)
      return;
    }
    const data = {
      ...newItem,
      amount: 1,
      total: newItem.price
    }
      setCart(products => [...products, data]);
      totalResultCart([...cart, data])
  }

  function removeItemCart(product: CartProps){
    const indexItem = cart.findIndex(item => item.id === product.id)

    if(cart[indexItem]?.amount > 1){
      const cartList = cart;
      const item = cartList[indexItem];

      item.amount -= 1;
      item.total = item.total - item.price

      setCart(cartList);
      totalResultCart(cartList)
      return;
    }
    
    const removeItem = cart.filter(item => item.id !== product.id)
    setCart(removeItem);
    totalResultCart(removeItem)
  }

  function totalResultCart(items: CartProps[]){
    const myCart = items;
    const result = myCart.reduce((acc, obj) => {return acc + obj.total}, 0);
    const resultFormated = result.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
    setTotal(resultFormated);
  }

  return(
    <CartContext.Provider
      value={{
        cart, 
        cartAmount: cart.length,
        addItemCart,
        removeItemCart,
        total
      }}
    >
      {children}
    </CartContext.Provider>
    )
}

export default CartProvider;
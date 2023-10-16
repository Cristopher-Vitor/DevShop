import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className='w-full max-w-7xl px-4 mx-auto'>
      <h1 className='font-medium text-2xl text-center my-4'>Meu Carrinho</h1>

      {cart.length === 0 && (
        <div className="flex flex-col items-center justify-content">
          <p className="font-medium">Seu carrinho está vazio.</p>
          <Link to="/" className="bg-slate-600 my-3 p-1 px-3 text-white font-medium rounded">
            Acessar Produtos.
          </Link>
        </div>
      )}

        {cart.map((item) => (
          <section key={item.id} className='flex items-center justify-between border-b-2 border-gray-300'>
          <img
            src={item.thumbnail}
            alt={item.title}
            className='w-28'
          />
          <strong>
            {item.price.toLocaleString(
              'pt-br', {
                style: 'currency',
                currency: 'BRL'
              }
          )}</strong>
          
          <div className='flex items-center justify-center gap-2'>
            <button className='bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center'>
              -
            </button>
            {item.amount}
            <button className='bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center'>
              +
            </button>
          </div>
  
          <strong>
            Subtotal: {item.total.toLocaleString(
              'pt-br',{
                style: 'currency',
                currency: 'BRL'
              }
            )}
          </strong>
        </section>
        ))}
      {cart.length != 0 && <p className='mt-4 font-medium'>Total: R$1.000</p>}
    </div>
  )
}

export default Cart
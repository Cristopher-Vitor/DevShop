import { BsCartPlus } from 'react-icons/bs'
import { useState, useEffect, useContext } from 'react'
import fetchProducts from '../Api/FetchApi'
import { CartContext } from '../Context/CartContext';

export interface ProductProps{
  id: string;
  title: string;
  thumbnail: string;
  price: number;
}

const Home = () => {
  const { addItemCart, cartAmount } = useContext(CartContext)
  const [products, setProducts] = useState<ProductProps[]>([])

  useEffect(() =>{
    fetchProducts().then((response) => {
      setProducts(response)
    });
  }, [])

  function handleAddCartItem(product: ProductProps){
    addItemCart(product)
    console.log(cartAmount);
  }

  return (
    <div>
      <main className='w-full max-w-7xl px-4 mx-auto'>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5'>
      
      {products.map((product) => (
          
          <section key={product.id} className='w-full mt-5'>
            <img
              src={product.thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
              alt="Logo do Produto"
            />

            <div className="ml-8">
              <p className="text-sm font-medium mt-1 mb-2">{product.title}</p>
              <div className='flex gap-3 items-center'>
                <strong className='text-zinc-700/90'>
                  {product.price.toLocaleString(
                    'pt-br',{
                      style: 'currency',
                      currency: 'BRL'
                    }
                  )}
                </strong>
                <button className='bg-zinc-900 p-1 rounded' onClick={() => handleAddCartItem(product)}>
                  <BsCartPlus color="#FFF" size={20}/>
                </button>
              </div>

            </div>
          </section>
      ))}
        </div>
      </main>
    </div>
  )
}

export default Home
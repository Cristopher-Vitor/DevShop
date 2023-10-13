import { BsCartPlus } from 'react-icons/bs'

const Home = () => {
  return (
    <div>
      <main className='w-full max-w-7xl px-4 mx-auto'>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5'>
          <section className='w-full'>
            <img
              src="https://cdn.dooca.store/165/products/vbwxopnra7hvvl11krimqjywvrgvrsgiozac_640x640+fill_ffffff.jpg?v=1630957703&webp=0"
              alt="Logo do Produto"
            />
            <p className="font-medium mt-1 mb-2">Airpods Pro</p>

            <div className='flex gap-3 items-center'>
              <strong className='text-zinc-700/90'>
                R$ 1000
              </strong>
              <button className='bg-zinc-900 p-1 rounded'>
                <BsCartPlus color="#FFF" size={20}/>
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default Home
import React from 'react'

const Cart = () => {
  return (
    <div className='w-full max-w-7xl px-4 mx-auto'>
      <h1 className='font-medium text-2xl text-center my-4'>Meu Carrinho</h1>
      <section className='flex items-center justify-between border-b-2 border-gray-300'>
        <img
          src="https://cdn.dooca.store/165/products/vbwxopnra7hvvl11krimqjywvrgvrsgiozac_640x640+fill_ffffff.jpg?v=1630957703&webp=0"
          alt="Logo do Produto"
          className='w-28'
        />
        <strong>Preço: R$1.000</strong>
        
        <div className='flex items-center justify-center gap-2'>
          <button className='bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center'>
            -
          </button>
          2
          <button className='bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center'>
            +
          </button>
        </div>

        <strong>
          Subtotal: R$ 1.000
        </strong>
      </section>

      <p className='mt-4 font-medium'>Total: R$1.000</p>
    </div>
  )
}

export default Cart
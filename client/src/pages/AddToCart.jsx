import React from 'react'

const AddToCart = () => {
  return (
    <div className='w-[80%] m-auto'>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className='overflow-hidden'>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes" className='hover:scale-[1.1] transition-all duration-300 object-cover h-full w-full' />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddToCart
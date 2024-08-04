import React from 'react'

export default function PricinigSection() {
  return (
    <div className='border md:w-[300px] w-[100%] p-2 md:sticky top-0'>
      <h1 className='font-bold text-center mb-5'>Bill Details</h1>
      <div className='w-full flex items-center justify-between mb-2'>
        <h1>Sub Total</h1>
        <p>3000000</p>
      </div>
      <div className='w-full flex items-center justify-between mb-2'>
        <h1>Discount</h1>
        <p>0</p>
      </div>
      <div className='w-full flex items-center justify-between mb-2'>
        <h1>Vat</h1>
        <p>0</p>
      </div>
      <div className='w-full flex items-center justify-between font-bold'>
        <h1>Total</h1>
        <p>3000000</p>
      </div>
      <hr className='my-5'></hr>
      <button className='font-bold w-full p-1 bg-black text-white rounded'>
        PLACE ORDER
      </button>
    </div>
  )
}

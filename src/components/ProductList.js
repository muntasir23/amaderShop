import React from 'react'
import Product from './Product'

export default function ProductList() {
  return (
    <div className='w-full mt-5 p-1 flex flex-wrap md:justify-start justify-center items-start md:gap-5 gap-2'>
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  )
}

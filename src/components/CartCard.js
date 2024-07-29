import React from 'react'

export default function Cart({cart}) {
  return (
    <div>
      <h1>{cart.productName}</h1>
      <h1>{cart.price}</h1>
      <h1>{cart.qyt}</h1>
      <h1>{cart.quantity}</h1>
    </div>
  )
}

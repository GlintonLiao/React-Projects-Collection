import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

export default function CheckoutProduct({id, title, price, rating, image}) {

  const [{basket}, dispatch] = useStateValue()

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE", 
      id: id, 
    })
  }
  return (
    <div className='checkoutProduct'>
      <img src={image} alt="" className="checkoutProduct__image" />
      <div className="checkoutProduct__info">
        <p className='checkoutProduct__title'>{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
          .fill()
          .map((_, i) => (
            <p>⭐</p>
          ))}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  )
}

import React from 'react'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'
import './Checkout.css'

export default function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" className="checkout__ad" />

        <div>
          <h2 className="checkout__title">
            You Shopping Cart
          </h2>
          <CheckoutProduct 
            id="49538094"
            title="IFB 30 L Convection Microwave Oven (30BRC2, Black, With Starter Kit)"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81D8pNFmWzL._SL1500_.jpg"
          />
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  )
}

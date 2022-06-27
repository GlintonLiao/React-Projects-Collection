import React from 'react'
import CurrencyFormat from 'react-currency-format'
import './Subtotal.css'

export default function SubTotal() {
  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={() => (
          <>
            <p>
              Subtotal items: 
              <strong>${20}</strong>
            </p>
            <small className='subtotal__gift'>
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}

        decimalScale={2}
        value={20}
        displayType={"text"}
        thousandSeparator={true}

      />

      <button>Proceed to Checkout</button>
    </div>
  )
}

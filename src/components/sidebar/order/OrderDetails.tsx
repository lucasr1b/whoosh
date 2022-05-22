import { Icon } from '@ailibs/feather-react-ts'
import React from 'react'


function OrderDetails() {
    return (
        <div className='Order--Details'>
            <div className='Order--Details--Info'>
                <div><Icon name='clock' /></div>
                <span>30-40 min</span>
            </div>
            <div className='Order--Details--Info'>
                <div><Icon name='map-pin' /></div>
                <span>123 Queen Street, Auckland</span>
            </div>
            <div className='Order--Details--Price'>
                <h1>Total Amount:</h1>
                <p><span>$</span>5.00</p>
            </div>
            <div className='Order--Details--Checkout'>
                <button>Checkout</button>
            </div>
        </div>
    )
}

export default OrderDetails
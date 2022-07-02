import { Icon } from '@ailibs/feather-react-ts'
import React from 'react'


function OrderDetails(props: any) {

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
                <p><span>${props.order.map((obj: any) => parseFloat(obj.price)).reduce((a: any, b: any) => a + b, 0).toFixed(2)}</span></p>
            </div>
            <div className='Order--Details--Checkout'>
                <button disabled={props.order.length < 1 ? true : false}>Checkout</button>
            </div>
        </div>
    )
}

export default OrderDetails
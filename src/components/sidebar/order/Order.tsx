import React from 'react'
import './Order.scss'
import OrderItem from './OrderItem'

function Order() {
    return (
        <div className='Order'>
            <h1>My Order</h1>
            <OrderItem />
        </div>
    )
}

export default Order
import React from 'react'
import './Order.scss'
import OrderDetails from './OrderDetails'
import OrderItem from './OrderItem'

function Order() {
    return (
        <div className='Order'>
            <h1>My Order</h1>
            <div className='Order--Items'>
                <OrderItem />
            </div>
            <div className='Divider'></div>
            <OrderDetails />
        </div>
    )
}

export default Order
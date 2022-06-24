import React from 'react'
import './Order.scss'
import OrderDetails from './OrderDetails'
import OrderItem from './OrderItem'

function Order(props: any) {
    return (
        <div className='Order'>
            <h1>My Order</h1>
            <div className='Order--Items'>
                <OrderItem order={props.order} removeOrderItem={props.removeOrderItem} addOrderItem={props.addOrderItem}/>
            </div>
            <div className='Divider'></div>
            <OrderDetails />
        </div>
    )
}

export default Order
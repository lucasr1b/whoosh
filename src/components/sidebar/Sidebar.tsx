import React from 'react'
import Navigation from './navigation/Navigation';
import Order from './order/Order';
import './Sidebar.scss';

function Sidebar(props: any) {
  return (
    <div className='Sidebar'>
      <Navigation />
      <Order order={props.order} addOrderItem={props.addOrderItem}/>
    </div>
  )
}

export default Sidebar
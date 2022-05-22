import React from 'react'
import Navigation from './navigation/Navigation';
import Order from './order/Order';
import './Sidebar.scss';

function Sidebar() {
  return (
    <div className='Sidebar'>
      <Navigation />
      <Order />
    </div>
  )
}

export default Sidebar
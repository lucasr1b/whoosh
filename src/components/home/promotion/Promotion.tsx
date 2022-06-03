import React from 'react'
import './Promotion.scss'
import FoodDelivery from '../../../assets/FoodDelivery.png';

function Promotion() {
  return (
    <div className='Promotion'>
        <div className='Promotion--Info'>
          <h1>Hello Lucas,</h1>
          <p>Get free delivery with <span>whoosh pro</span> for only <span>$4.99 a month</span></p>
          <button>Learn More</button>
        </div>
        <div className='Promotion--Image'>
        <img src={FoodDelivery} alt='Food Delivery'/>
        </div>
      </div>
  )
}

export default Promotion
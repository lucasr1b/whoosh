import React, { useState } from 'react'
import './Menu.scss';
import MenuCategoryItem from './MenuCategoryItem';
import MenuFoodItem from './MenuFoodItem';
import MenuData from './MenuFoodData';
import MenuCategoryData from './MenuCategoryData';

function Menu() {
    const [categoryName, setCategoryName] = useState('burger');

    return (
        <div className='Menu'>
            <h3>Menu Category</h3>
            <div className='Menu--Category'>
                {MenuCategoryData.map((item, index) => {
                    const isActive = item.name.toLowerCase() === categoryName ? 'Menu--Category--Item--Active' : '';
                    return (
                        <MenuCategoryItem name={item.name} image={item.image} active={isActive} onClick={() => setCategoryName(item.name.toLowerCase())} key={index} />
                    )
                })}
            </div>
            <div className='Menu--Food'>
                {MenuData.map((item, index) => {
                    return item.category === categoryName ? (
                        <MenuFoodItem name={item.name} price={item.price} rating={item.rating} display={item.display} key={index} />
                    ) : null
                })}
            </div>
        </div>
    )
}

export default Menu
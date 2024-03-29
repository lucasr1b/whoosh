import React, { useState } from 'react'
import './Menu.scss';
import MenuCategoryItem from './MenuCategoryItem';
import MenuFoodItem from './MenuFoodItem';
import MenuData from './data/MenuFoodData';
import MenuCategoryData from './data/MenuCategoryData';

function Menu(props: any) {
    const [categoryName, setCategoryName] = useState('burger');

    return (
        <div className='Menu'>
            <h3>Menu Category</h3>
            <div className='Menu--Category'>
                {MenuCategoryData.map((item, index) => {
                    const isActive = item.name.toLowerCase() === categoryName ? 'Menu--Category--Item--Active' : '';
                    return (
                        <MenuCategoryItem name={item.name} display={item.display} active={isActive} onClick={() => setCategoryName(item.name.toLowerCase())} key={index} />
                    )
                })}
            </div>
            <div className='Menu--Food'>
                {MenuData.map((item, index) => {
                    return item.category === categoryName ? (
                        <MenuFoodItem order={props.order} addOrderItem={props.addOrderItem} item={item} key={index} />
                    ) : null
                })}
            </div>
        </div>
    )
}

export default Menu
import React from 'react'
import './Menu.scss';
import MenuCategoryItem from './MenuCategoryItem';
import Burger from '../../assets/food/Burger.png';

function Menu() {
    return (
        <div className='Menu'>
            <h3>Menu Category</h3>
            <div className='Menu--Category'>
                <MenuCategoryItem name='Pizza' image={Burger} />
                <MenuCategoryItem name='Burger' image={Burger} />
                <MenuCategoryItem name='Drink' image={Burger} />
                <MenuCategoryItem name='Dessert' image={Burger} />
                <MenuCategoryItem name='Donut' image={Burger} />
                <MenuCategoryItem name='Snack' image={Burger} />
            </div>
        </div>
    )
}

export default Menu
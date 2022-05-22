import React from 'react'
import './Menu.scss';
import MenuCategoryItem from './MenuCategoryItem';
import Burger from '../../../assets/food/Burger.png';
import Pizza from '../../../assets/food/Pizza.png';
import Drink from '../../../assets/food/Drink.png';
import Dessert from '../../../assets/food/Dessert.png';
import Donut from '../../../assets/food/Donut.png';
import Snack from '../../../assets/food/Snack.png';
import MenuFoodItem from './MenuFoodItem';
import Cheeseburger from '../../../assets/display/Cheeseburger.jpg';
import ChickenBurger from '../../../assets/display/ChickenBurger.jpg';
import BetterBurger from '../../../assets/display/BetterBurger.jpg';

function Menu() {
    return (
        <div className='Menu'>
            <h3>Menu Category</h3>
            <div className='Menu--Category'>
                <MenuCategoryItem name='Burger' image={Burger} active='Menu--Category--Item--Active'/>
                <MenuCategoryItem name='Pizza' image={Pizza} />
                <MenuCategoryItem name='Drink' image={Drink} />
                <MenuCategoryItem name='Dessert' image={Dessert} />
                <MenuCategoryItem name='Donut' image={Donut} />
                <MenuCategoryItem name='Snack' image={Snack} />
            </div>
            <div className='Menu--Food'>
                <MenuFoodItem name='Cheeseburger' price='5.00' rating='5' display={Cheeseburger}/>
                <MenuFoodItem name='Chicken Burger' price='8.99' rating='4' display={ChickenBurger}/>
                <MenuFoodItem name='Better Burger' price='6.99' rating='4' display={BetterBurger}/>
            </div>
        </div>
    )
}

export default Menu
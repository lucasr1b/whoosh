import React from 'react'
import './Home.scss';
import Menu from './menu/Menu';
import Navigation from './navigation/Navigation';
import Promotion from './promotion/Promotion';

function Home(props: any) {
    return (
        <div className='Container'>
            <Navigation />
            <Promotion />
            <Menu order={props.order} addOrderItem={props.addOrderItem}/>
        </div>
    )
}

export default Home
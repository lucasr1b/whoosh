import React from 'react'
import './Home.scss';
import Menu from './menu/Menu';
import Navigation from './navigation/Navigation';
import Promotion from './promotion/Promotion';

function Home() {
    return (
        <div className='Container'>
            <Navigation />
            <Promotion />
            <Menu />
        </div>
    )
}

export default Home
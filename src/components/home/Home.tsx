import React from 'react'
import './Home.scss';
import Menu from './Menu';
import Navigation from './Navigation';
import Promotion from './Promotion';

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
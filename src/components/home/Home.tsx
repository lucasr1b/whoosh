import React from 'react'
import './Home.scss';
import Navigation from './Navigation';
import Promotion from './Promotion';

function Home() {
    return (
        <div className='Container'>
            <Navigation />
            <Promotion />
        </div>
    )
}

export default Home
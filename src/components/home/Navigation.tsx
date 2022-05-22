import React from 'react'
import './Navigation.scss';

function Navigation() {
    return (
        <nav>
            <span className='Brand'>whoosh</span>
            <div className='Search--Container'><input placeholder='Search by food name' className='Search'/></div>
        </nav>
    )
}

export default Navigation
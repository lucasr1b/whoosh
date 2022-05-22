import React from 'react'
import './Navigation.scss';
import { Icon } from '@ailibs/feather-react-ts'

function Navigation() {
    return (
        <nav>
            <span className='Brand'>whoosh</span>
            <div className='Search--Container'><input placeholder='Search by food name' className='Search' /><div className='Search--Icon'><Icon name="search" /></div></div>
        </nav>
    )
}

export default Navigation
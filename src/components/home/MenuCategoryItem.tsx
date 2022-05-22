import React from 'react'
import './Menu.scss';
import { Icon } from '@ailibs/feather-react-ts'

function MenuCategoryItem(props: any) {
    return (
        <div className='Menu--Category--Item'>
            <div className='Menu--Category--Item--Image'>
                <img src={props.image}></img>
            </div>
            <span>{props.name}</span>
            <div className='Menu--Category--Item--Select'>
                <Icon name='chevron-right' />
            </div>
        </div>
    )
}

export default MenuCategoryItem
import React from 'react'
import { Icon } from '@ailibs/feather-react-ts'

function MenuFoodItem(props: any) {

    const rating = props.rating;

    return (
        <div className='Menu--Food--Item'>
            <div className='Menu--Food--Item--Display' style={{ background: 'url(' + props.display + ')' }}></div>
            <div className='Menu--Food--Item--Wrapper'>
                <div className='Menu--Food--Item--Details'>
                    <h1>{props.name}</h1>
                    <div className='Rating'>
                        {[...new Array(5)].map((arr, index) => {
                            return index < rating ? <Icon name='star' /> : <Icon name='star' className='Half--Star' />
                        })}
                    </div>
                    <p><span>$</span>{props.price}</p>
                </div>
                <div className='Menu--Food--Item--Add'>
                    <div><Icon name='plus' /></div>
                </div>
            </div>
        </div>
    )
}

export default MenuFoodItem
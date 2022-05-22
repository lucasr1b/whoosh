import React from 'react'
import { Icon } from '@ailibs/feather-react-ts'

function MenuFoodItem(props: any) {
    const rating: any = [];

    for (let i = 0; i < props.rating; i++) {
        rating.push(i + 1);
    }

    return (
        <div className='Menu--Food--Item'>
            <div className='Menu--Food--Item--Display' style={{ background: 'url(' + props.display + ')' }}></div>
            <div className='Menu--Food--Item--Wrapper'>
                <div className='Menu--Food--Item--Details'>
                    <h1>{props.name}</h1>
                    <div className='Rating'>
                        {rating.map(function (i: any) {
                            return <Icon name='star' key={i} />
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
import React from 'react'
import { Icon } from '@ailibs/feather-react-ts'

function MenuFoodItem({item, ...props}: any) {

    const rating = item.rating;

    return (
        <div className='Menu--Food--Item'>
            <div className='Menu--Food--Item--Display' style={{ background: 'url(' + item.display + ')' }}></div>
            <div className='Menu--Food--Item--Wrapper'>
                <div className='Menu--Food--Item--Details'>
                    <h1>{item.name}</h1>
                    <div className='Rating'>
                        {[...new Array(5)].map((arr, index) => {
                            return index < rating ? <Icon name='star' key={index} /> : <Icon name='star' className='Half--Star' key={index} />
                        })}
                    </div>
                    <p><span>$</span>{item.price}</p>
                </div>
                <div className='Menu--Food--Item--Add'>
                    <div onClick={() => props.addOrderItem(item)}><Icon name='plus' /></div>
                </div>
            </div>
        </div>
    )
}

export default MenuFoodItem
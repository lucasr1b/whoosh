import { Icon } from '@ailibs/feather-react-ts'
import React from 'react'
import Cheeseburger from '../../../assets/display/Cheeseburger.jpg'

function OrderItem(props: OrderItemProps) {

    console.log(props.order);

    return (
        <>
            {props.order && props.order.map(item => {
                return (
                    <div className='Order--Item'>
                        <img src={item.display} alt='Order Item' />
                        <div className='Order--Item--Details'>
                            <p>{item.name}</p>
                            <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                            </select>

                        </div>
                        <div className='Order--Item--Price'>
                            <p><span>$</span>{item.price}</p>
                        </div>
                        <div className='Order--Item--Delete'>
                            <span><Icon name='x' /></span>
                        </div>

                    </div>
                )
            })}
        </>
    )
}

type OrderItemProps = {
    order: Item[];
    addOrderItem: (order: string) => void;
}

export default OrderItem
import { Icon } from '@ailibs/feather-react-ts'
import React from 'react'

function OrderItem(props: OrderItemProps) {

    function removeItem(object: any) {
        props.removeOrderItem(props.order.filter(item => object.id !== item.id));
    }

    return (
        <>
            {props.order && props.order.map((item, index) => {
                return (
                    <div className='Order--Item' key={index}>
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
                            <span onClick={() => removeItem(item)}><Icon name='x' /></span>
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
    removeOrderItem: (order: Item[]) => void;
}

export default OrderItem
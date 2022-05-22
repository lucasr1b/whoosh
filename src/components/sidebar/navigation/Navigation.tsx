import React from 'react'
import './Navigation.scss';
import { Icon } from '@ailibs/feather-react-ts';
import PFP from '../../../assets/PFP.png';

function Navigation() {
    return (
        <nav>
            <div className='Notifications'><Icon name='bell' /></div>
            <div className='Profile'>
                <div className='Profile--Picture'>
                    <img src={PFP} />
                </div>
                <span>Lucas Ribeiro</span>
            </div>
        </nav>
    )
}

export default Navigation
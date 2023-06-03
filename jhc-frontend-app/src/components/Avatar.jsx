import React from 'react';
import './styles/Avatar.scss'
import Image from '../images/Jonas.png';

export const Avatar = () => {
    return (
        <div className="avatar">
            <img src={Image} className="image" alt="" />
       </div>
    )
}
import React from 'react';
import './styles/Bookings.scss';
import CalendyWidget from './CalendyWidget';
import { Avatar } from './Avatar';

export const Bookings = () => {

    return (
        <div className="booking">
            <div className="avatar">
                <Avatar />
            </div>
            <div className="calendy">
                <CalendyWidget />
            </div>
        </div>
    )
}
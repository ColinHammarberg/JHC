import React from 'react';
import './styles/Bookings.scss';
import { Avatar } from './Avatar';
import MeetingsEmbed from './MeetingEmbeded';

export const Bookings = () => {

    return (
        <div className="booking">
            <div className="avatar">
                <Avatar />
            </div>
            <div className="hubspot">
                <MeetingsEmbed />
            </div>
        </div>
    )
}
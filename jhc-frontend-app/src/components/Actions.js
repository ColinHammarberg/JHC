import React from 'react';
import './styles/Actions.scss';
import MeetingsEmbed from './MeetingEmbeded';
import Header from './Header';

export const Actions = () => {
    return (
        <div className="action">
            <Header pageName="Booking" />
            <div className="action-options">
                <MeetingsEmbed />
            </div>
        </div>
    )
}
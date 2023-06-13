import React from 'react';
import './styles/Actions.scss';
import { useNavigate } from 'react-router-dom';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import { Button } from '@mui/material';
import { Avatar } from './Avatar';

export const Actions = () => {
    const navigate = useNavigate();
    
    function handleOnClickRedirectBooking() {
        navigate('/bookings');
    }

    return (
        <div className="action">
            <Avatar />
            <div className="result">
                <div className="schedule-meeting">
                    <Button onClick={handleOnClickRedirectBooking}>
                        <CalendarMonthIcon />
                    </Button>
                    <div className="schedule-meeting-description">
                        <span>Book a free call</span>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="how-it-works">
                    <Button>
                        <WorkspacesIcon />
                    </Button>
                    <div className="schedule-meeting-description">
                        <span>See how it works</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
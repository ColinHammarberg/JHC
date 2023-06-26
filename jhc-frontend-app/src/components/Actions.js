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
        navigate(`${process.env.REACT_APP_BASEURL}/bookings`);
    }

    function handleOnClickRedirectSpce() {
        navigate(`${process.env.REACT_APP_BASEURL}/customercases`);
    }

    return (
        <div className="action">
            <Avatar />
            <div className="action-options">
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
                    <Button onClick={handleOnClickRedirectSpce}>
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
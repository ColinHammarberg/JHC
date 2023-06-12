import React, { useContext } from 'react';
import './styles/Actions.scss';
import { useNavigate } from 'react-router-dom';
import { JhcContext } from '../context/JhcContext';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import { IconButton } from '@mui/material';

export const Actions = () => {
    const navigate = useNavigate();
    
    function handleOnClickRedirect() {
        navigate('/actions');
    }

    return (
        <div className="result">
            <div className="schedule-meeting">
                <IconButton onClick={handleOnClickRedirect}>
                    <CalendarMonthIcon />
                </IconButton>
                <div className="schedule-meeting-description">
                    <span>Book a free call</span>
                </div>
            </div>
            <div className="divider"></div>
            <div className="how-it-works">
                <IconButton onClick={handleOnClickRedirect('/spce')}>
                    <WorkspacesIcon />
                </IconButton>
                <div className="schedule-meeting-description">
                    <span>See how it works</span>
                </div>
            </div>
        </div>
    )
}
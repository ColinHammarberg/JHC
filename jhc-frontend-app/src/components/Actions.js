import React, { useContext } from 'react';
import './styles/Actions.scss';
import { useNavigate } from 'react-router-dom';
import { JhcContext } from '../context/JhcContext';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import { IconButton } from '@mui/material';

export const Meetings = () => {
    const { selectedProblemType } = useContext(JhcContext);
    const navigate = useNavigate();

    return (
        <div className="result">
            <div className="schedule-meeting">
                <IconButton onClick={navigate('/booking')}>
                    <CalendarMonthIcon />
                </IconButton>
                <div className="schedule-meeting-description">
                    <span>Book a free call</span>
                </div>
            </div>
            <div className="divider"></div>
            <div className="how-it-works">
                <IconButton onClick={navigate('/spce')}>
                    <WorkspacesIcon />
                </IconButton>
                <div className="schedule-meeting-description">
                    <span>See how it works</span>
                </div>
            </div>
        </div>
    )
}
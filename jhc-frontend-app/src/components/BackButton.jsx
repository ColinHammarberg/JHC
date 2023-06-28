import React from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function BackButton() {
    const navigate = useNavigate();
    function handleOnClickBack() {
        navigate('/')
    }

    return (
        <IconButton onClick={handleOnClickBack}>
            <ArrowBackIosNewIcon />
        </IconButton>
    )
}

export default BackButton;
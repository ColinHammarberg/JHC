import React from 'react';
import { Button } from '@mui/material';
import './styles/BoxButton.scss';


function BoxButton({ variant, onClick, className }) {

    function handleOnClick() {
        onClick();
    }

    return (
        <Button className={`box-button ${className}`} onClick={handleOnClick}>
            {typeof variant === 'object' ? variant : <img src={variant} alt='' />}
        </Button>
    )
}

export default BoxButton;
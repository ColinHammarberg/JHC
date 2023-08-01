import React, { useState } from 'react';
import { Button } from '@mui/material';
import './styles/BoxButton.scss';


function BoxButton({ variant, onClick, className }) {
    const [isClicked, setIsClicked] = useState(false);

    function handleOnClick() {
        onClick();
        setIsClicked(true);
    }

    function onAnimationEnd() {
        setIsClicked(false);
    }

    return (
        <Button className={`box-button ${className} ${isClicked ? 'pop-animation' : ''}`} onClick={handleOnClick} onAnimationEnd={onAnimationEnd}>
            {typeof variant === 'object' ? variant : <img src={variant} alt='' />}
        </Button>
    )
}

export default BoxButton;
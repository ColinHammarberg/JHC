import React from 'react';
import Button from '@mui/material/Button';
import './styles/Buttons.scss';


export const JhcButton = (props) => {
    function handleOnClick() {
        if (props.onClick) {
            props.onClick()
        }
    }
    return (
        <Button className="jhc-btn" onClick={handleOnClick}><span>{props.label}</span></Button>
    )
}
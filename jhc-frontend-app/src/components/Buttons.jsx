import React from 'react';
import './styles/ShowcaseCompany.scss';
import './styles/Buttons.scss';


export const Button = (props) => {
    function handleOnClick() {
        if (props.onClick) {
            props.onClick()
        }
    }
    return (
        <Button className="jhc-btn" onClick={handleOnClick}>{props.label}</Button>
    )
}
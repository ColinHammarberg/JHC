import React from 'react';
import JonasInspiration from '../images/Jonas-inspiration.png';
import JonasSpeech from '../images/Jonas-speech.png';
import { Button } from '@mui/material';


function BoxButton({ type, onClick }) {

    function handleOnClick() {
        onClick();
    }

    return (
        <Button className="box-button" onClick={handleOnClick}>
            <img src={type === 0 ? JonasSpeech : JonasInspiration} alt='' />
        </Button>
    )
}

export default BoxButton;
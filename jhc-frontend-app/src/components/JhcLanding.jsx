import React, { useState, useEffect } from 'react';
import { Avatar } from './Avatar';
import TypingEffect from './TypingEffect';
import { useNavigate } from 'react-router-dom';
import './styles/JhcLanding.scss';

function JhcLanding() {
  const navigate = useNavigate();
  const [showLoading, setShowLoading] = useState(false);
  const [seconds, setSeconds] = useState();

  function beginCountDown(seconds) {
    let counter = seconds;

    const interval = setInterval(() => {
      counter--;
      setSeconds(counter);

      if (counter < 0) {
        clearInterval(interval);
      }
    }, 1000);
  }

  useEffect(() => {
    const timeoutCountDown = setTimeout(() => {
      setShowLoading(true);
      beginCountDown(4);
    }, 9000);

    const timeoutRedirect = setTimeout(() => {
      navigate('/problems');
    }, 14000);

    return () => {
      clearTimeout(timeoutCountDown);
      clearTimeout(timeoutRedirect);
    };
  }, [navigate]);

  return (
    <div className="home-container">
      {!showLoading ? (
        <>
          <div className="avatar">
            <Avatar />
          </div>
          <div className="typing">
            <TypingEffect />
          </div>
        </>
      ) : (
        <div className="count-down">
          You will be re-directed in <span>{seconds}</span> seconds
        </div>
      )}
    </div>
  );
}

export default JhcLanding;

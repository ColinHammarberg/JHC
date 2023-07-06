import React, { useEffect, useState } from 'react';
import { Avatar } from './Avatar';
import TypingEffect from './TypingEffect';
import { useNavigate } from 'react-router-dom';
import './styles/JhcLanding.scss';
import Image from '../images/Jonas-5.png';

function JhcLanding() {
  const navigate = useNavigate();
  const [showBackgroundTransition, setShowBackgroundTransition] = useState(false);
  // const [showLoading, setShowLoading] = useState(false);
  // const [seconds, setSeconds] = useState();

  // function beginCountDown(seconds) {
  //   let counter = seconds;
  //   const interval = setInterval(() => {
  //     counter--;
  //     setSeconds(counter);
  //     if (counter < 0) {
  //       clearInterval(interval);
  //     }
  //   }, 1000);
  // }

  useEffect(() => {
    // const timeoutCountDown = setTimeout(() => {
    //   setShowLoading(true);
    //   beginCountDown(4);
    // }, 9000);

    const timeoutRedirect = setTimeout(() => {
      setShowBackgroundTransition(true);
      setTimeout(() => {
        navigate('/welcome');
        // navigate(`${process.env.REACT_APP_BASEURL}/welcome`);
      }, 1500);
    }, 8000);

    return () => {
      // clearTimeout(timeoutCountDown);
      clearTimeout(timeoutRedirect);
    };
  }, [navigate]);

  return (
    <div className={`home-container ${showBackgroundTransition ? ' transition' : ''}`}>
        <div className="landing-area">
          <div className="avatar">
            <Avatar image={Image} />
          </div>
          <div className="typing">
            <TypingEffect className={`${showBackgroundTransition ? ' transition' : ''}`}/>
          </div>
        </div>
    </div>
  );
}

export default JhcLanding;

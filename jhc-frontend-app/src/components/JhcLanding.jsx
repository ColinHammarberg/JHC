import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/JhcLanding.scss';
import JonasInAction from '../images/Jonas-in-action.png';
import Header from './Header';

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
    const timeoutRedirect = setTimeout(() => {
      setShowBackgroundTransition(true);
      const redirectTimeout = setTimeout(() => {
        navigate(`${process.env.REACT_APP_BASEURL}/welcome`);
      }, 2000);

      return () => {
        clearTimeout(timeoutRedirect);
        clearTimeout(redirectTimeout);
      };
    }, 4000);

    return () => {
      // Clear the outer timeout if the component unmounts before it executes
      clearTimeout(timeoutRedirect);
    };
  }, [navigate]);

  return (
    <div className={`home-container ${showBackgroundTransition ? ' transition' : ''}`}>
      <div className="header-container">
        <Header jhcLanding />
      </div>
        <div className="landing-image">
          <img src={JonasInAction} alt=""/>
        </div>
    </div>
  );
}

export default JhcLanding;

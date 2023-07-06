import React, { forwardRef, useEffect, useState } from 'react';
import './styles/SpceLanding.scss';
// import Spce from '../images/spce-logo.png';

const SpceLanding = forwardRef((props, ref) => {
  const [showSpace, setShowSpace] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpace(true);
    }, [2000]);
    return () => {
      clearTimeout(timer);
    }
  })
  return (
    <div ref={ref} className="spce-container">
      <div className="spce-area">
        <div className="spce-logo">
        <div className={`spce-logo ${showSpace ? 'space' : ''}`}>
          <span>S</span>
          <span>P</span>
          {showSpace && <span className="space"> </span>}
          <span>C</span>
          <span>E</span>
        </div>
        </div>
        <div className="spce-description">
          <span>
            SP_CE offers digital rooms where you can safely invite people, share content and collaborate. <br></br>
            All while earning actionable insights about your buyers’ journey. Click <a href="https://www.spce.com" rel="noreferrer" target="_blank">here</a> to read more.
          </span>
      </div>
      </div>
    </div>
  );
});

export default SpceLanding;

import React, { forwardRef } from 'react';
import './styles/SpceLanding.scss';
import Spce from '../images/spce-logo.png';

const SpceLanding = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="spce-container">
      <div className="spce-area">
        <div className="spce-logo">
          <img src={Spce} alt="" />
        </div>
      </div>
    </div>
  );
});

export default SpceLanding;

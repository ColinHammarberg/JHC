import React from 'react';
// import { useNavigate } from 'react-router-dom';
import './styles/SpceLanding.scss';
import Spce from '../images/spce-logo.png';

function SpceLanding() {
//   const navigate = useNavigate();
  // const [showLoading, setShowLoading] = useState(false);
  // const [seconds, setSeconds] = useState();

  return (
    <div className={`spce-container`}>
        <div className="spce-area">
          <div className="spce-logo">
            <img src={Spce} alt="" />
          </div>
        </div>
    </div>
  );
}

export default SpceLanding;

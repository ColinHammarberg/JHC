import React, { useRef } from 'react';
import { isMobile } from 'react-device-detect';
import { Avatar } from './Avatar';
import './styles/Welcome.scss';
import { ShowcaseCompany } from './ShowcaseCompany';
import Microsoft from '../images/MicrosoftTeams.png';
import Fellowmind from '../images/fellowmind.webp';
import Vattenfall from '../images/Vattenfall.png';
import Header from './Header';
import Image from '../images/Jonas-4.png';
import { ScrollButton } from './ScrollButton';
import SpceLanding from './SpceLanding';
import JonasInAction from '../images/Jonas-in-action.png';

export const Welcome = () => {
  const targetRef = useRef(null);
  const [showSpceLanding, setShowSpceLanding] = React.useState(false);
  const [scrolledUp, setScrolledUp] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolledUp(window.scrollY);
      if (scrolledUp === 0) {
        setShowSpceLanding(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolledUp, showSpceLanding]);

  const Images = [
    {
      key: 1,
      source: Microsoft,
    },
    {
      key: 2,
      source: Fellowmind,
    },
    {
      key: 3,
      source: Vattenfall,
    },
  ];

  const handleClick = async () => {
    await setShowSpceLanding(true);
    setScrolledUp(false);
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="welcome">
      <Header pageName="Overview" />
      {isMobile ? (
        <>
          <div className="content">
          <div className="avatar">
            <Avatar image={Image} />
          </div>
          <div className="description">
            Helping all from large companies to small start-ups succeed and reach <br></br> their vision in the most engaging and tangible way.
          </div>
          <div className="showcase">
            {Images.map((item) => {
              return <ShowcaseCompany item={item} />;
            })}
          </div>
        </div>
          <div className="scroll">
          {!showSpceLanding && (
            <ScrollButton showSpceLanding={showSpceLanding} onClick={handleClick} />
          )}
          </div>
        </>
      ) : (
        <>
          <div className="content">
            <div className="content-left">
              <img src={JonasInAction} alt=""/>
            </div>
            <div className="content-right">
              <div className="description">
                Helping all from large companies to small start-ups succeed and reach <br></br> their vision in the most engaging and tangible way.
              </div>
              <div className="showcase">
                {Images.map((item) => {
                  return <ShowcaseCompany item={item} />;
                })}
              </div>
            </div>
          </div>
          <div className="scroll">
            {!showSpceLanding && (
              <ScrollButton showSpceLanding={showSpceLanding} onClick={handleClick} />
            )}
          </div>
        </>
      )}
      
      <div className="spce-section">
        {showSpceLanding && <SpceLanding ref={targetRef} />}
      </div>
    </div>
  );
};

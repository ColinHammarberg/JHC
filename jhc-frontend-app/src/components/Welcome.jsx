import React, { useEffect, useRef, useState } from 'react';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
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
  const [showSpceLanding, setShowSpceLanding] = useState(false);
  const [scrolledUp, setScrolledUp] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
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
    {
      key: 4,
      source: Vattenfall,
    },
    {
      key: 5,
      source: Vattenfall,
    },
    {
      key: 6,
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

  const handleOnClickBack = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? Images.length - 1 : prevIndex - 1));
  };

  const handleOnClickForward = () => {
    setCurrentIndex((prevIndex) => (prevIndex === Images.length - 1 ? 0 : prevIndex + 1));
  };

  const visibleImages = isMobile
    ? [Images[currentIndex]]
    : [
        Images[(currentIndex - 1 + Images.length) % Images.length],
        Images[currentIndex],
        Images[(currentIndex + 1) % Images.length],
      ];

  return (
    <div className="welcome">
      <Header jhcLanding />
      {isMobile ? (
          <div className="content">
            <div className="avatar">
              <Avatar image={Image} />
            </div>
            <div className="description">
              Helping all from large companies to small start-ups succeed <br></br> and reach their vision in the most <br></br> engaging and tangible way.
            </div>
            <div className="showcase">
              <ArrowLeftIcon onClick={handleOnClickBack} />
              {visibleImages.map((item) => (
                <ShowcaseCompany key={item.key} item={item} />
              ))}
              <ArrowRightIcon onClick={handleOnClickForward} />
            </div>
            <div className="scroll">
              {!showSpceLanding && <ScrollButton showSpceLanding={showSpceLanding} onClick={handleClick} />}
            </div>
          </div>
      ) : (
        <>
          <div className="content">
            <div className="content-left">
              <img src={JonasInAction} alt="" />
            </div>
            <div className="content-right">
              <div className="container">
                <div className="description">
                  Helping all from large companies to small start-ups succeed and reach their vision in the most engaging and tangible way.
                </div>
                <div className="showcase">
                  <ArrowLeftIcon onClick={handleOnClickBack} />
                  {visibleImages.map((item) => (
                    <ShowcaseCompany key={item.key} item={item} />
                  ))}
                  <ArrowRightIcon onClick={handleOnClickForward} />
                </div>
                <div className="scroll">
                  {!showSpceLanding && <ScrollButton showSpceLanding={showSpceLanding} onClick={handleClick} />}
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <div className="spce-section">
        {showSpceLanding && <SpceLanding ref={targetRef} />}
      </div>
    </div>
  );
};

import React, { useRef } from 'react';
import { Avatar } from './Avatar';
import './styles/Welcome.scss';
import { ShowcaseCompany } from './ShowcaseCompany';
import Microsoft from '../images/MicrosoftTeams.png';
import Fellowmind from '../images/fellowmind.webp';
import Vattenfall from '../images/Vattenfall.png';
// import { JhcButton } from './Buttons';
// import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Image from '../images/Jonas-4.png';
import { ScrollButton } from './ScrollButton';

export const Welcome = () => {
    const targetRef = useRef(null);
    const Images = [
        {
            key: 1,
            source: Microsoft
        },
        {
            key: 2,
            source: Fellowmind
        },
        {
            key: 3,
            source: Vattenfall
        },
    ]

    const handleClick = () => {
        if (targetRef.current) {
          targetRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="welcome">
           <Header />
            <div className="content">
                <div className="avatar">
                    <Avatar image={Image} />
                </div>
                <div className="description">
                    Helping all from large companies to small start-ups succeed and reach <br></br> their vision in the most engaging and tangible way.
                </div>
                <div className="showcase">
                    {Images.map((item) => {
                        return (
                            <ShowcaseCompany item={item} />
                        )
                    })}
                </div>
            </div>
            <div className="scroll">
                <ScrollButton onClick={handleClick} />
                {/* {showSpcePage && <JhcLanding ref={targetRef} />} */}
            </div>
        </div>
    )
}
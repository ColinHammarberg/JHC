import React, { useState } from 'react';
import { Avatar } from './Avatar';
import './styles/Welcome.scss';
import { ShowcaseCompany } from './ShowcaseCompany';
import Microsoft from '../images/MicrosoftTeams.png';
import Fellowmind from '../images/fellowmind.webp';
import Vattenfall from '../images/Vattenfall.png';
// import Spce from '../images/SPCE.png';
// import { JhcButton } from './Buttons';
// import { useNavigate } from 'react-router-dom';
import { Menu } from './Menu';
import { useNavigate } from 'react-router-dom';

export const Welcome = () => {
    // const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const navigate = useNavigate();
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
        // {
        //     key: 4,
        //     source: Spce
        // },
    ]
    // function handleOnClick() {
    //     navigate(`${process.env.REACT_APP_BASEURL}/utalization` );
    //     // navigate(`/utalization` );
    // }

    const handleOpenMenu = () => {
        setIsOpen(true);
    };

    const handleCloseMenu = () => {
        setIsOpen(false);
    };

    function handleOnClickMenuItem (navigation) {
        navigate(`${process.env.REACT_APP_BASEURL}/${navigation}` );
    }

    return (
        <div className="welcome">
            <div className={!isOpen ? 'closed-menu' : 'opened-menu'}>
                <Menu handleOnClickMenuItem={handleOnClickMenuItem} setSelectedItem={setSelectedItem} selectedItem={selectedItem} handleOpenMenu={handleOpenMenu} handleCloseMenu={handleCloseMenu} isOpen={isOpen} />
            </div>
            <div className="content">
                <div className="avatar">
                    <Avatar />
                </div>
                <div className="description">
                    Helping all from large companies to small start-ups succeed and reach their vision in the most engaging and tangible way.
                </div>
                <div className="showcase">
                    {Images.map((item) => {
                        return (
                            <ShowcaseCompany item={item} />
                        )
                    })}
                </div>
                {/* <div className="redirect-btn">
                    <JhcButton onClick={handleOnClick} label="Enter Site" />
                </div> */}
            </div>
        </div>
    )
}
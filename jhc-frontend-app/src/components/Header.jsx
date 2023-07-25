import React, { useState } from 'react';
import BackButton from './BackButton';
import './styles/Header.scss';
import { Menu } from './Menu';
import { useNavigate } from 'react-router-dom';

function Header(props) {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const handleOpenMenu = () => {
        setIsOpen(true);
    };

    const handleCloseMenu = () => {
        setIsOpen(false);
    };
    function handleOnClickMenuItem (navigation) {
        // navigate(`/${navigation}` );
        navigate(`${process.env.REACT_APP_BASEURL}/${navigation}` );
    }
    return (
        <div className="header">
            <div className={!isOpen ? 'closed-menu' : 'opened-menu'}>
                <Menu handleOnClickMenuItem={handleOnClickMenuItem} handleOpenMenu={handleOpenMenu} handleCloseMenu={handleCloseMenu} isOpen={isOpen} />
            </div>
            <div className="back-button">
                <BackButton />
                <span>{props.pageName}</span>
            </div>
        </div>
    )
}

export default Header;
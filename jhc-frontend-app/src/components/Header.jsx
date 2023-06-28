import React from 'react';
import BackButton from './BackButton';
import './styles/Header.scss';
import { Menu } from './Menu';

function Header(props) {
    const { handleOnClickMenuItem, setSelectedItem, selectedItem, handleOpenMenu, handleCloseMenu, isOpen } = props;
    return (
        <div className="header">
            <div className={!isOpen ? 'closed-menu' : 'opened-menu'}>
                <Menu handleOnClickMenuItem={handleOnClickMenuItem} setSelectedItem={setSelectedItem} selectedItem={selectedItem} handleOpenMenu={handleOpenMenu} handleCloseMenu={handleCloseMenu} isOpen={isOpen} />
            </div>
            <div className="back-button">
                <BackButton />
            </div>
    </div>
    )
}

export default Header;
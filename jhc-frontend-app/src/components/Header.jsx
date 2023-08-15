import React, { useState } from 'react';
import BackButton from './BackButton';
import './styles/Header.scss';
import { Menu } from './Menu';
import { useNavigate } from 'react-router-dom';
import Tabs from './Tabs';

function Header(props) {
    const [isOpen, setIsOpen] = useState(false);
    const { onChange, tabs, isMobile, videoCases } = props;
    const navigate = useNavigate();
    const handleOpenMenu = () => {
        setIsOpen(true);
    };

    const handleCloseMenu = () => {
        setIsOpen(false);
    };
    function handleOnClickMenuItem (navigation) {
        // navigate(`/${navigation}`);
        navigate(`/${navigation}`);
    }
    return (
        <div className="header-container">
            <div className="header">
                <div className={!isOpen ? 'closed-menu' : 'opened-menu'}>
                    <Menu handleOnClickMenuItem={handleOnClickMenuItem} handleOpenMenu={handleOpenMenu} handleCloseMenu={handleCloseMenu} isOpen={isOpen} />
                </div>
                <div className={`back-button ${videoCases ? 'video-cases' : ''}`}>
                    {!props.jhcLanding && <BackButton />}
                    <div className="tabs">
                        {videoCases && !isMobile && (
                            <Tabs
                                tabs={tabs}
                                onChange={onChange}
                                variant="tabs-level-2 preview-details-privacy-level"
                            />
                        )}
                    </div>
                    <span>{props.pageName}</span>
                </div>
            </div>
        </div>
    )
}

export default Header;
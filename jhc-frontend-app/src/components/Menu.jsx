import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import './styles/Menu.scss';
import { menuItems } from '../constants/Constants';
import { Button, IconButton } from '@mui/material';

export const Menu = (props) => {
    const { selectedItem } = props;

    function handleOnClick(item) {
        props.handleOnClickMenuItem(item.key);
    }

    return (
        <div>
            {!props.isOpen ? (
                <div className="closed-menu-item">
                    <IconButton>
                        <MenuIcon onClick={props.handleOpenMenu} />
                    </IconButton>
                </div>
            ) : (
                <div className="opened-menu-item">
                    <div className="close-btn">
                        <IconButton>
                            <MenuOpenIcon onClick={props.handleCloseMenu} />
                        </IconButton>
                    </div>
                    <div className="menu">
                        <div className="menu-items">
                            {menuItems.map((item) => (
                                <Button
                                    key={item.key}
                                    onClick={() => handleOnClick(item)}
                                    className={`menu-item ${selectedItem === item.key ? 'active' : ''}`}
                                >
                                    {item.title}
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

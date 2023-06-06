import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import './styles/Menu.scss'
import { menuItems } from '../constants/Constants';
import { Button, IconButton } from '@mui/material';

export const Menu = (props) => {
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
                    <IconButton>
                        <MenuOpenIcon onClick={props.handleCloseMenu} />
                    </IconButton>
                        <div className="menu">
                            <div className="menu-items">
                                {menuItems.map((item) => {
                                    return (
                                        <Button className="menu-item">
                                            {item.title}
                                        </Button>
                                    )
                                })}
                            </div>
                        </div>
                </div>
            )}
        </div>
    );
};
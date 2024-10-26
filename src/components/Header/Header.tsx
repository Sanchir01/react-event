import React from 'react';
import { AppBar, Toolbar, IconButton, Avatar } from '@mui/material';
import './Header.css';

const Header: React.FC = () => {
  return (
    <div className="headerContainer">
      <AppBar position="static" color="transparent" className="header">
        <Toolbar className="toolbar">
          <div className="logoContainer">
            <img src="/src/shared/assets/images/_IconButton_.svg" alt="Logo" className="logoImage" />
          </div>
          <div className="headerBlock">
          <a href="#h" className="headerLink">
            Запросы о помощи
          </a>
          <a href="#" className="profileLink">
            <IconButton className="profileButton">
              <Avatar className="profileAvatar" />
            </IconButton>
          </a>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;

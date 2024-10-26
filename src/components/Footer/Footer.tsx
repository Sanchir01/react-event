import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footerContainer">
      <nav className="footerContent">
        <a href="#" className="footerLink">Об ивенте</a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="footerLink">
          Github проекта
        </a>
        <a href="#" className="footerLink">Чат для друзей</a>
      </nav>
    </footer>
  );
};

export default Footer;

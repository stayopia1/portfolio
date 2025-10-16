import React from 'react';
import '../header/header.scss';
import Logo from './components/Logo';

const Header: React.FC = () => {
  return (
    <header className="header-wrapper">
      <div className="header">
        <Logo />
      </div>
    </header>
  );
};

export default Header;

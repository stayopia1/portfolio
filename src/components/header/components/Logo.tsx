import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <Link to="#" className='logo'>
      <img src="/sp2.png" alt="Stayopia" title="Stayopia" />
    </Link>
  );
};

export default Logo;

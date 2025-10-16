import React from 'react';
import '../header/header.scss';
import Button from '../../ui/Button';
import { HardHat } from 'lucide-react';
import Navbar from './components/Navbar';

const BottomHeader: React.FC = () => {
  return (
    <div className="bottom-header-wrapper">
      <div className="bottom-header">
        <Navbar />
        <Button title="Book now" icon={<HardHat className="icon" size={18} />} />
      </div>
    </div>
  );
};

export default BottomHeader;

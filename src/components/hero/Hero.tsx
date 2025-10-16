import React from 'react';
import '../hero/hero.scss';
import Button from '../../ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="hero-wrapper" id="home">
      <div className="hero">
        <div className="texts">
          <h1>Stayopia</h1>
          <p className="title-bottom">
            Your gateway to unforgettable hospitality experiences. We redefine comfort,
            luxury, and service in the modern hotel industry.
          </p>
          <Button
            styles={{ marginTop: '24px', padding: '10px 48px' }}
            reverse
            title="Learn more"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

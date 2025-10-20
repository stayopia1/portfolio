import React from 'react';
import '../hero/hero.scss';
import Button from '../../ui/Button';
import { useTranslation } from 'react-i18next';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="hero-wrapper" id="home">
      <div className="hero">
        <div className="texts">
          <h1>Stayopia</h1>
          <p className="title-bottom">{t('hero_text')}</p>
          <Button
            styles={{ marginTop: '24px', padding: '10px 48px' }}
            reverse
            title={t('learn_more')}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

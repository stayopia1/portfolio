import React from 'react';
import '../footer/footer.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface Socials {
  id: number;
  href: string;
  icon: string;
}

const SocialData: Socials[] = [
  {
    id: 1,
    icon: '/Platform=LinkedIn, Color=Negative.svg',
    href: 'https://www.linkedin.com/stayopia',
  },
  {
    id: 2,
    icon: '/instagram.svg',
    href: 'https://www.instagram.com/stayopia',
  },
  {
    id: 3,
    icon: '/twitter.svg',
    href: 'https://www.x.com/stayopia',
  },
];

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer-wrapper">
      <div className="footer">
        <div className="footer-content">
          {/* Logo */}
          <div className="footer-logo">
            <img src="/stayopia_logo.jpg" alt="Company Logo" />
          </div>

          {/* Socials */}
          <div className="socials">
            {SocialData?.map((data: Socials) => (
              <Link
                target="_blank"
                to={data.href ?? '#'}
                key={data.id}
                className="social-item"
              >
                <img src={data.icon} alt={data.href} />
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div className="footer-contact">
            <h3>{t('footer.contact')}</h3>
            <p>
              {t('footer.email')}:{' '}
              <a href="mailto:allsales.stayopia@gmail.com">allsales.stayopia@gmail.com</a>
            </p>
            <p>
              {t('footer.phone')}: <a href="tel:+491623326230">+491623326230</a>
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Stayopia. {t('footer.all_rights_reserved')}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

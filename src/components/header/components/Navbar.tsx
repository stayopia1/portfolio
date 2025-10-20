import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHandleScroll } from './useHandleScroll';

interface NavInterface {
  id: number;
  title: string;
  href: string;
}

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const { activeSection, handleScrollTo } = useHandleScroll();

  const NavbarElements: NavInterface[] = [
    { id: 1, title: t('navbar.home'), href: 'home' },
    { id: 2, title: t('navbar.about'), href: 'about' },
    { id: 3, title: t('navbar.services'), href: 'services' },
    // { id: 4, title: t("navbar.contact"), href: 'contact' },
  ];

  return (
    <nav className="navbar">
      {NavbarElements.map(data => (
        <button
          key={data.id}
          className={`nav-link ${activeSection === data.href ? 'active' : ''}`}
          onClick={() => handleScrollTo(data.href)}
        >
          <span className="flag"></span>
          <p>{data.title}</p>
        </button>
      ))}
    </nav>
  );
};

export default Navbar;

import React, { type ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import Logo from './components/Logo';

type LangType = {
  id: number;
  val: string;
  flag: string;
};

const Langs: LangType[] = [
  { id: 1, val: 'en', flag: '/england.svg' },
  { id: 2, val: 'es', flag: '/spain.svg' },
  { id: 3, val: 'sr', flag: '/serbia.svg' },
  { id: 4, val: 'az', flag: '/azerbaijan.svg' },
];

const Header: React.FC = () => {
  const { i18n } = useTranslation();

  const initialLang = Langs.find(l => l.val === i18n.language) ?? Langs[0];
  const [selectedFlag, setSelectedFlag] = React.useState<string>(initialLang.flag);

  const handleChangeLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
    const langVal = e.target.value;
    const lang = Langs.find(l => l.val === langVal);
    if (lang) setSelectedFlag(lang.flag);
    i18n.changeLanguage(langVal);
  };

  return (
    <header className="header-wrapper">
      <div className="header">
        <Logo />
        <div className="language-select-wrapper">
          <img src={selectedFlag} alt="flag" className="language-flag" />
          <select
            value={i18n.language}
            onChange={handleChangeLanguage}
            className="language-dropdown"
          >
            {Langs.map(l => (
              <option key={l.id} value={l.val}>
                {l.val.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;

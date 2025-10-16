import React, { useEffect, useState } from 'react';

interface NavInterface {
  id: number;
  title: string;
  href: string;
}

const NavbarElements: NavInterface[] = [
  { id: 1, title: 'Home', href: 'home' },
  { id: 2, title: 'About Us', href: 'about' },
  { id: 3, title: 'Services', href: 'services' },
  { id: 4, title: 'Contact Us', href: 'contact' },
];

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');

  const handleScrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px', 
        threshold: 0,
      },
    );

    sections.forEach(sec => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

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

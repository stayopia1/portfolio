import React from 'react';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import BottomHeader from './components/header/BottomHeader';
import About from './components/about/About';
import Services from './components/services/Services';
// import ContactUs from './components/contacts/ContactUs';
import Footer from './components/footer/Footer';

const App: React.FC = () => {
  return (
    <main className="app">
      <Header />
      <BottomHeader />
      <Hero />
      <About />
      <Services />
      {/* <ContactUs /> */}
      <Footer />
    </main>
  );
};

export default App;

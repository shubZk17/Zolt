import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import UseCases from '../components/UseCases';
import Integrations from '../components/Integrations';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

interface HomePageProps {
  onShowLogin: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onShowLogin }) => {
  return (
    <>
      <Header onShowLogin={onShowLogin} />
      <Hero onShowLogin={onShowLogin} />
      <Features />
      <UseCases />
      <Integrations />
      <CTA onShowLogin={onShowLogin} />
      <Footer />
    </>
  );
};

export default HomePage;
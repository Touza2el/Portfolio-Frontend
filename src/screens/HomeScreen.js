import React from 'react';

import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';

const HomeScreen = () => {
  return (
    <div className='home'>
      <HeroSection />
      <ServicesSection />
    </div>
  );
};

export default HomeScreen;

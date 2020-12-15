import React from 'react';

import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import BannerSection from '../components/BannerSection';
import ProjectsSection from '../components/ProjectsSection';
import WhySection from '../components/WhySection';

const HomeScreen = () => {
  return (
    <div className='home'>
      <HeroSection />
      <ServicesSection />
      <BannerSection />
      <ProjectsSection />
      <WhySection />
    </div>
  );
};

export default HomeScreen;

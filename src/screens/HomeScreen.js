import React from 'react';

import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import BannerSection from '../components/BannerSection';
import ProjectsSection from '../components/ProjectsSection';
import WhySection from '../components/WhySection';
import SubscribeSection from '../components/SubscribeSection';
import ContactSection from '../components/ContactSection';

const HomeScreen = () => {
  return (
    <div className='home'>
      <HeroSection />
      <ServicesSection />
      <BannerSection />
      <ProjectsSection />
      <SubscribeSection />
      <WhySection />
      <ContactSection />
    </div>
  );
};

export default HomeScreen;

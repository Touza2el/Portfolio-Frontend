import React from 'react';

import { data } from '../data';
import SectionTitle from './SectionTitle';

const ServicesSection = () => {
  const { services } = data;

  return (
    <section className='services-section'>
      <SectionTitle title='services' />
      <div className='container'>
        <div className='services-content'>
          {services.map((service) => (
            <div className='service-item' key={service.id}>
              <div className='service-icon'>
                <i className={service.icon}></i>
              </div>
              <div className='service-title'>
                <h4>{service.title}</h4>
              </div>
              <div className='service-description'>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

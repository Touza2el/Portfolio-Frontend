import React from 'react';

import { data } from '../data';
import SectionTitle from './SectionTitle';

const WhySestion = () => {
  const { reasons } = data;
  return (
    <section className='why-section'>
      <SectionTitle title='why choose me' />
      <div className='container'>
        <div className='why-section-content'>
          {reasons.map((reason) => (
            <div className='reason-item' key={reason.id}>
              <div className='reason-icon'>
                <i className={reason.icon}></i>
              </div>
              <div className='reason-title'>
                <h4>{reason.title}</h4>
              </div>
              <div className='reason-description'>
                <p>{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySestion;

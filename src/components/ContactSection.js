import React from 'react';
import SectionTitle from './SectionTitle';

const ContactSection = () => {
  return (
    <section className='contact-section'>
      <SectionTitle title='contact me' />
      <div className='container'>
        <div className='contact-content'>
          <div className='map'>
            <iframe
              title='map'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13765.523069703879!2d-9.546073167357081!3d30.3969370080852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3c825f48b65f7%3A0xc1a03d5109d60a9e!2sCit%C3%A9%20El%20Houda%2C%20Agadir%2080000!5e0!3m2!1sen!2sma!4v1608214981816!5m2!1sen!2sma'
              width='100%'
              height='100%'
              frameborder='0'
              allowfullscreen=''
              aria-hidden='false'
              tabindex='0'
            ></iframe>
          </div>
          <form action=''>
            <input type='text' placeholder='Name' />
            <input type='text' placeholder='Email' />
            <textarea
              id=''
              cols='30'
              rows='10'
              placeholder='Your Message'
            ></textarea>
            <input className='btn' type='button' value='SUBMIT' />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

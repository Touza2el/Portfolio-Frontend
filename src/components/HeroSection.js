import React from 'react';
import { Link } from 'react-router-dom';
const HeroSection = () => {
  return (
    <section className='hero-section'>
      <div className='container'>
        <div className='hero-section-content'>
          <div className='hero-section-text'>
            <div className='hero-icon'>
              <Link
                to={{
                  pathname: 'https://github.com/Touza2el',
                }}
                target='_blank'
              >
                <i className='fab fa-github'></i>
              </Link>
            </div>
            <div className='hero-title'>
              <h1>Front-End Developer</h1>
            </div>
            <div className='hero-description'>
              <p>
                I'm Front-End web developer, I build fast, modern and mobile
                friendly websites and web applications using modern web
                technologies : <br /> HTML, CSS, Javascript, React and
                WordPress.
              </p>
            </div>
            <div className='hero-btn'>
              <Link to='/contact'>CONTACT ME</Link>
            </div>
          </div>
          <div className='hero-section-image'>
            <img src='/images/hero-image.png' alt='desk' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

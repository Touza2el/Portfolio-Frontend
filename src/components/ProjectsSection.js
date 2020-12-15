import React from 'react';
import SectionTitle from './SectionTitle';

const ProjectsSection = () => {
  return (
    <section className='projects-section'>
      <SectionTitle title='projects' />
      <div className='container'>
        <div className='projects-content'>
          <div className='project-item'>
            <div
              className='text'
              onClick={() => {
                window.open('https://hotel33.netlify.app', '_blank');
              }}
            >
              <p>view website</p>
            </div>
            <img src='/images/projects/1.jpg' alt='hotel' />
          </div>
          <div className='project-item'>
            <div
              className='text'
              onClick={() => {
                window.open('https://lerosite.netlify.app', '_blank');
              }}
            >
              <p>view website</p>
            </div>
            <img src='/images/projects/2.jpg' alt='leroku' />
          </div>
          <div className='project-item'>
            <div
              className='text'
              onClick={() => {
                window.open('https://shosite.netlify.app', '_blank');
              }}
            >
              <p>view website</p>
            </div>
            <img src='/images/projects/3.jpg' alt='shop' />
          </div>
          <div className='project-item'>
            <div
              className='text'
              onClick={() => {
                window.open('https://ressite.netlify.app', '_blank');
              }}
            >
              <p>view website</p>
            </div>
            <img src='/images/projects/4.jpg' alt='restaurant' />
          </div>
          <div className='project-item'>
            <div
              className='text'
              onClick={() => {
                window.open('https://fitsite.netlify.app', '_blank');
              }}
            >
              <p>view website</p>
            </div>
            <img src='/images/projects/5.jpg' alt='fitness' />
          </div>
          <div className='project-item'>
            <div
              className='text'
              onClick={() => {
                window.open('https://lerosite.netlify.app', '_blank');
              }}
            >
              <p>view website</p>
            </div>
            <img src='/images/projects/6.jpg' alt='hotel' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

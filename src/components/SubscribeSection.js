import React from 'react';

const SubscribeSection = () => {
  return (
    <section className='subscribe-section'>
      <div className='container'>
        <div className='subscribe-content'>
          <p>let's stay in contact :</p>
          <div className='subscribe-form'>
            <input className='input' type='text' Email placeholder='Email' />
            <input className='btn' type='button' value='subscribe' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;

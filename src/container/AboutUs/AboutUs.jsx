import React from 'react';

import {images} from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
      <div className="app__aboutus-overlay flex__center">
          <img src={images.G} alt="g letter"/>
      </div>

      <div className="app__aboutus-content flex__center">
          <div className="app__aboutus-content_about">
            <h1 className='headtext__cormorant' data-aos="fade-right">About Us</h1>
            <img src={images.spoon} alt="spoon img" />
            <p className='p__opensans'>At Grand Feast, we create unforgettable dining experiences with a menu full of delicious dishes made from the finest ingredients. Whether for a casual meal or a special celebration, our warm atmosphere and exceptional service ensure every visit is a true feast!</p>
            <button className='custom__button'>Know More</button>
          </div>


          <div className="app__aboutus-content_knife flex__center">
            <img src={images.knife} alt="knife img" />
          </div>

          <div className="app__aboutus-content_history">
            <h1 className='headtext__cormorant' data-aos="fade-left">Our History</h1>
            <img src={images.spoon} alt="spoon img" />
            <p className='p__opensans'>Grand Feast started as a humble eatery with a simple goal: to create unforgettable dining experiences. Over time, we’ve grown into a cherished restaurant, known for our delicious dishes and warm atmosphere, bringing people together for every occasion.</p>
            <button className='custom__button'>Know More</button>
          </div>
      </div>
  </div>
);

export default AboutUs;

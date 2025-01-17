import React from 'react';
import {FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi';

import {FooterOverlay, Newsletter} from '../../components';
import {images} from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding app__bg'>
    <FooterOverlay/>
    <Newsletter/>

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">123 Greenway Avenue,Block A, Gurugram, Haryana-122001,India</p>
        <p className="p__opensans">+91 21234 41230</p>
        <p className="p__opensans">+91 21255 51230</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.goldenlogo} alt="footer_logo" className='golden'/>
        <p className="p__opensans">"The best way to find yourself is to lose yourself in the service of others."</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <a href="https://www.facebook.com/sanjana.saha.167527" target="_blank"><FiFacebook /></a>
          <a href="https://twitter.com/MyntSlush?s=09" target="_blank"><FiTwitter /></a>
          <a href="https://www.instagram.com/sanjana_saha_/" target="_blank"><FiInstagram /></a>
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>
    
    <div className="footer__copyright">
      <p className="p__opensans">2024. All Rights reserved.</p>
      <p className="p__opensans">Developed by Sanjana Saha in React</p>
    </div>
  </div>
);

export default Footer;

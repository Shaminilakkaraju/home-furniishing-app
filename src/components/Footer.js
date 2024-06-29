import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faPinterest,
  faYoutube,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import {
  faCcVisa,
  faCcMastercard,
  faCcPaypal,
  faCcAmex,
  faAmazonPay,
  faGooglePay,
  faApplePay
} from '@fortawesome/free-brands-svg-icons';

import appicon1 from '../assets/appicon1.png';
import appicon2 from '../assets/appicon2.jpg';
import '../styles/Footer.css'; 

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-grid">
        <div className="footer-section">
          <h3>The Company:</h3>
          <ul>
            <li>About Us</li>
            <li>Help</li>
            <li>Blog</li>
            <li>Inside UL</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Team</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>More Information:</h3>
          <ul>
            <li>Fees and Payment</li>
            <li>Shipping & Delivery</li>
            <li>Terms and Conditions</li>
            <li>Warranty, Return and Refund</li>
            <li>Contact Us</li>
            <li>Visit Us</li>
            <li>Buy In Bulk</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Explore more</h3>
          <ul>
            <li>Refer & Earn</li>
            <li>Gift Cards</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Address:</h3>
          <p>
            Reliance Retail Limited, 3rd Floor, Court House, Lokmanya Tilak Marg, Dhobi Talao, Mumbai- 400 002, Maharashtra, India
          </p>
          <p>
            CIN: U01100MH1999PLC120563
          </p>
        </div>
      </div>
      <div className='footer-middle'>
        <div className="footer-section">
          <h3>Connect With Us:</h3>
          <div className="social-icons">
            <a href="tel:+919067543257">
              <FontAwesomeIcon icon={faPhoneAlt} />
            </a>
            <a href="mailto:info@urbanladder.com">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a href="https://www.facebook.com/urbanladderofficial" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faFacebook} className="facebook-icon" />
            </a>
            <a href="https://twitter.com/UrbanLadder" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTwitter} className="twitter-icon" />
            </a>
            <a href="https://www.instagram.com/urbanladder/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="instagram-icon" />
            </a>
            <a href="https://in.pinterest.com/urbanladder/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faPinterest} className="pinterest-icon" />
            </a>
            <a href="https://www.youtube.com/user/urbanladder" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faYoutube} className="youtube-icon" />
            </a>
            <a href="https://www.linkedin.com/company/urban-ladder/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="linkedin-icon" />
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Download App:</h3>
          <div className="app-links">
            <a href="https://apps.apple.com/in/app/urban-ladder/id1444444444" target="_blank" rel="noreferrer">
              <img src={appicon1} alt="Download from Apple Store" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.urbanladder" target="_blank" rel="noreferrer">
              <img src={appicon2} alt="Download from Playstore" />
            </a>
          </div>
        </div>
      </div>
      <div>
        <div className="footer-section">
          <h3>Delivering in:</h3>
          <p>
            Aanamalai, Ahmedabad, Alappuzha, Aler, Alibaug, Alleppey, Alwaye, Ambala, Ambarnath, Amdapur, Amtala, Anakapalle, Anand, Anikorai, Arakkonam, Arimpur, Arnala, Arutla, Asansol, Athikunna, Athipalli ... More
          </p>
        </div>
        <div className="footer-section">
          <h3>We Accept:</h3>
          <FontAwesomeIcon icon={faCcVisa} className="visa-icon" />
          <FontAwesomeIcon icon={faCcMastercard} className="mastercard-icon" />
          <FontAwesomeIcon icon={faCcPaypal} className="paypal-icon" />
          <FontAwesomeIcon icon={faCcAmex} className="amex-icon" />
          <FontAwesomeIcon icon={faAmazonPay} className="amazonpay-icon" />
          <FontAwesomeIcon icon={faGooglePay} className="gpay-icon" />
          <FontAwesomeIcon icon={faApplePay} className="applepay-icon" />
        </div>
      </div>
      <div className="footer-copyright">
        <p>© 2012-2024 URBAN LADDER</p>
      </div>
    </div>
  );
};

export default Footer;

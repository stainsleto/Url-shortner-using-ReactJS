import React from 'react';
import FooterImage from '../images/footer-logo.png'
import FooterImage2 from '../images/icon-facebook.svg'
import FooterImage3 from '../images/icon-pinterest.svg'
import FooterImage4 from '../images/icon-twitter.svg'
import FooterImage5 from '../images/icon-instagram.svg'



function Footer(){
  return (
    
    <div id="body">

      <div id="footer-logo">
        <img src={FooterImage} />
      </div>

      <div id='features'>
        <h3 className="footer-title">Features</h3>
        <p className="footer-button">Link shortening </p>
        <p className="footer-button">Branded links</p>
        <p className="footer-button">Analytics</p>
      </div>
      <div  id='resoures'>
        <h3 className="footer-title">Resources</h3>
        <p className="footer-button" >Blog</p>
        <p className="footer-button">Developers</p>
        <p className="footer-button">Support</p>
      </div>
      <div id='company'>
        <h3 className="footer-title">Company</h3>
        <p className="footer-button">About</p>
        <p className="footer-button">Our team</p>
        <p className="footer-button">Carears</p>
        <p className="footer-button" >Contact</p>
      </div>
      <div>

      </div>

      <div id='social-media'>
        <img className="footer-icon" src={FooterImage2} />
        <img className="footer-icon" src={FooterImage3} />
        <img className="footer-icon" src={FooterImage4} />
        <img className="footer-icon" src={FooterImage5} />
      </div>






    </div>

  );
};

export default Footer;

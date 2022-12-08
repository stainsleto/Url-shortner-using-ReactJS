import React from 'react';
import FooterImage from '../images/logo.svg'
function Footer(){
  return (
    
    <div id="body">
        <div id="footer-logo">
        <img src={FooterImage} />
        </div>
      <div id='features'>
        <h3>Features</h3>
        <p>Link shortening </p>
        <p>Branded links</p>
        <p>Analytics</p>
      </div>
      <div  id='resoures'>
        <h3 >Resources</h3>
        <p >Blog</p>
        <p >Developers</p>
        <p >Support</p>
      </div>
      <div >
        <h3 >Company</h3>
        <p>About</p>
        <p >our team</p>
        <p >Carears</p>
        <p >Contact</p>
      </div>
    </div>

  );
};

export default Footer;

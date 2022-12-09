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
      <div>

      </div>
      <div id='social-media'>
      
      <img src={FooterImage2} />
      <img src={FooterImage3} />
      <img src={FooterImage4} />
      <img src={FooterImage5} />
      

      </div>






    </div>

  );
};

export default Footer;

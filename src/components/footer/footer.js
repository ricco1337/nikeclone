import React, {Component} from 'react';
import './footer.css';
import NikeEmail from './../assets/asset-8.jpeg';
import twitter from './../assets/twitter-icon.png';
import facebook from './../assets/facebook-grey.png';
import youtube from './../assets/icoYoutube.png';
import instagram from './../assets/instagram.png';

class Footer extends Component {
  render() {
    return (
      <div>
        <div className='nike-email-signup'>

          <img src={NikeEmail} alt='nikeEmail' className='img-responsive nike-email'></img>
          <div className='email-container'>
            <h1 className='nike-email-header'>SIGN UP FOR NIKE EMAIL</h1>
            <p className='nike-email-caption'>Be the first to know about the latest products, exclusives and offers from Nike</p>
            <p className='nike-email-signup'>SIGN UP</p>
          </div>
        </div>
        <div className='container-fluid'>
          <div className='row'></div>
          <div className='col-md-4 footer-text footer-nav-container'>
            <p className='footer-captions'>GIFT CARDS</p>
            <p className='footer-captions'>STUDENT DISCOUNT</p>
            <p className='footer-captions'>FIND A STORE</p>
            <p className='footer-captions'>SIGN UP FOR EMAIL</p>
            <p className='footer-captions'>BECOME A MEMBER</p>
            <p className='footer-captions'>SITE FEEDBACK</p>

          </div>
          <div className='col-md-2 col-offset-2 footer-nav-captions footer-nav-container'>
            <p className='get-help-header'>GET HELP</p>
            <p className='footer-nav'>Order Status</p>
            <p className='footer-nav'>Shipping and Delivery</p>
            <p className='footer-nav'>Returns</p>
            <p className='footer-nav'>Payment Options</p>
            <p className='footer-nav'>Contact Us</p>
          </div>
          <div className='col-md-2 col-offset-2 footer-nav-captions footer-nav-container'>
            <p className='about-nike-header'>ABOUT NIKE</p>
            <p className='footer-nav'>News</p>
            <p className='footer-nav'>Careers</p>
            <p className='footer-nav'>Converse Culture & Careers</p>
            <p className='footer-nav'>Investors</p>
            <p className='footer-nav'>Sustainable Innovation</p>
            <p className='footer-nav'>CA Supply Chains Act</p>
          </div>
          <div>
            <ul className='networks-ul'>
              <li className='footer-socials'><img src={twitter} className='img-responsive social-network' alt='social-logos'></img></li>
              <li className='footer-socials'><img src={facebook} className='img-responsive social-network' alt='social-logos'></img></li>
              <li className='footer-socials'><img src={youtube} className='img-responsive social-network' alt='social-logos'></img></li>
              <li className='footer-socials'><img src={instagram} className='img-responsive social-network'  alt='social-logos'></img></li>
            </ul>
          </div>
        </div>
        <div className='footer-line'></div>

      </div>
    )
  }
}

export default Footer;

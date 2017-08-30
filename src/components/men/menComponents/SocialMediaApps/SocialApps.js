import React, {Component} from 'react';
import '../../men.css';
import NikeApps from './../../../assets/Apps.jpg'
import NikeSocials from './../../../assets/socialbar.jpg'



class SocialMediaApps extends Component {
  render() {
    return (
      <div>
        <div className='men-container'>
          <div className='men-picture-header-container'>
          <h2 className='men-picture-headers'>DOWNLOAD OUR APPS</h2>
          </div>
<img src={NikeApps} alt='nike-apps' className='img-responsive'></img>
<ul className='nike-apps-ul'>
  <li className='nike-plus'>NIKE+</li>
    <li className='nike-run'>NIKE+ RUN CLUB</li>
      <li className='nike-training'>NIKE+ TRAINING CLUB</li>
        <li className='nike-snkrs'>NIKE+ SNKRS</li>

</ul>

  <h1 className='follow-nike'>FOLLOW NIKE</h1>
<img src={NikeSocials} alt='nike-socials' className='img-responsive'></img>



          </div>

      </div>

    )
  }
}



export default SocialMediaApps;

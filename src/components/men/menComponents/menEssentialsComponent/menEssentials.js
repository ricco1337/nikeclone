import React, {Component} from 'react';
import '../../men.css';
import essentials from './../../../assets/essentials.jpg';

class MenEssentials extends Component {
  render() {
    return (
      <div>
        <div className='men-container'>
          <div className='men-picture-header-container'>
          <h2 className='men-picture-headers'>SHOP THE ESSENTIALS</h2>
          </div>
        
<img src={essentials} alt='essentials-img' className='img-responsive'></img>

    <div className='men-latest-shoes-container'>
      <div className='row'></div>
      <div className='col-md-4 men-essentials-caption'>SHORTS
      </div>
        <div className='col-md-4 men-essentials-caption'>TOPS <br /> &TEES
        </div>
          <div className='col-md-4 men-essentials-caption'>BOARD <br /> SHORTS
          </div>


    </div>
</div>
      </div>

    )
  }
}



export default MenEssentials;

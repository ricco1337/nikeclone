import React, {Component} from 'react';
import '../../home.css';
import bagsbackpacks from './../../../assets/asset-5.jpeg';



class ThirdImage extends Component {
  render() {
    return (
      <div className='image-container'>
        <div className='whiteimg-titles'>
        <h1 className='white-header'>BAGS AND BACKPACKS</h1>
   <div className='white-caption-div'>
   <p className='white-caption'>Start back prepared with the right bag <br />
      for your sport and style.</p>
</div>
</div>
   <img src={bagsbackpacks} className='home-images  img-responsive' alt='blue-img'></img>


  </div>
    )
  }
}

export default ThirdImage;

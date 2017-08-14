import React, {Component} from 'react';
import '../../home.css';
import gearsupport from './../../../assets/asset-6.jpeg';




class FourthImage extends Component {
  render() {
    return (
      <div className='image-container'>
        <div className='greenimg-titles'>
        <h1 className='green-header'>GEAR UP FOR SPORT</h1>
   <div className='green-caption-div'>
   <p className='green-caption'>Get everything you need for your best season ever.</p>
</div>
</div>
   <img src={gearsupport} className='home-images  img-responsive' alt='blue-img'></img>


  </div>
    )
  }
}

export default FourthImage;

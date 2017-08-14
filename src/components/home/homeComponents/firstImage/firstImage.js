import React, {Component} from 'react';
import '../../home.css';
import blueimg from './../../../assets/asset-3.jpeg';



class FirstImage extends Component {
  render() {
    return (
      <div className='image-container'>
        <div className='blueimg-titles'>
        <h1 className='blue-header'>NIKE SUMMER FAVORITES: <br />
     INDIGO EDITION</h1>
   <div className='blue-caption-div'>
   <p className='blue-caption'>Refresh your wardrobe with summer's greatest shade. <br />
Explore cool-toned pieces designed for running, <br />
training and everyday.</p>
</div>
</div>
   <img src={blueimg} className='home-images  img-responsive' alt='blue-img'/>




  </div>
    )
  }
}

export default FirstImage;

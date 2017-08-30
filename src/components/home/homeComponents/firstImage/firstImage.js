import React, {Component} from 'react';
import '../../home.css';
import PictureOne from './../../../assets/P1.jpg';



class FirstImage extends Component {
  render() {
    return (
      <div className='image-container'>


   <img src={PictureOne} className='home-images  img-responsive' alt='PictureOne'/>




  </div>
    )
  }
}

export default FirstImage;

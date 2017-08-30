import React, {Component} from 'react';
import '../../home.css';
import PictureThree from './../../../assets/P3.jpg';



class ThirdImage extends Component {
  render() {
    return (
      <div className='image-container'>

   <img src={PictureThree} className='home-images  img-responsive' alt='pictureThree'></img>


  </div>
    )
  }
}

export default ThirdImage;

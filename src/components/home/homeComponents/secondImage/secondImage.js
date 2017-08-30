import React, {Component} from 'react';
import '../../home.css';
import PictureTwo from './../../../assets/P2.jpg';



class SecondImage extends Component {
  render() {
    return (
        <div className='image-container'>
   <img src={PictureTwo} className='home-images img-responsive' alt='p2'></img>


  </div>
    )
  }
}

export default SecondImage;

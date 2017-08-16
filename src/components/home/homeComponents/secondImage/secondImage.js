import React, {Component} from 'react';
import '../../home.css';
import strong from './../../../assets/asset-4.jpeg';



class SecondImage extends Component {
  render() {
    return (
      <div className='image-container'>
        <div className='redimg-titles'>
        <h1 className='red-header'>START BACK STRONG</h1>
   <div className='red-caption-div'>
   <p className='red-caption'>Define your year with new gear for a fresh start <br />
on the court, the field, and the classroom.</p>
</div>
<div className='red-img-button'>
<div className="dropdown">
  <button className="dropbtn">Shop Now</button>
  <div className="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>
</div>
</div>
   <img src={strong} className='home-images img-responsive' alt='blue-img'></img>


  </div>
    )
  }
}

export default SecondImage;

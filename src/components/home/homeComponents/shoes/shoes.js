import React, {Component} from 'react';
import '../../home.css';
import ShoesImage from './../../../assets/shoes.jpg';



class Shoes extends Component {
  render() {
    return (
      <div>

        <div className='whiteimg-titles'>
        <h1 className='shoes-header'>NOW TRENDING</h1>

        </div>

<img src={ShoesImage}className='img-responsive home-images' alt='home-shoes'></img>
  <div className='shoes-caption'>
<div className='row'></div>
<div className='shoe-names col-md-1'>
  <p>nike</p>
</div>
<div className='shoe-names col-md-1'>
  <p>nike</p>
</div>
<div className='shoe-names col-md-1'>
  <p>nike</p>
</div>
<div className='shoe-names col-md-1'>
  <p>nike</p>
</div>
  </div>
</div>
    )
  }
}

export default Shoes;

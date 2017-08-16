import React, {Component} from 'react';
import '../../home.css';
import airforce1 from './../../../assets/airforce1.jpg';
import vapormax from './../../../assets/vapormax.jpg';
import presto from './../../../assets/airpresto.jpg';
import metcon from './../../../assets/metcon.jpg';



class Shoes extends Component {
  render() {
    return (
      <div>

        <div className='whiteimg-titles'>
        <h1 className='shoes-header'>NOW TRENDING</h1>

        </div>
  <div className='shoe-images'>
<div className='row'>

</div>

<div className='col-md-3 '>
<img src={airforce1}  className='shoe-image img-responsive'></img>
  <figcaption className='shoe-names'>NIKE AIRFORCE 1</figcaption>
    <figcaption className='shoe-shop'>Shop Now</figcaption>
</div>

<div className=' col-md-3 '>
  <img src={vapormax} className='shoe-image img-responsive' ></img>
    <figcaption className='shoe-names'>NIKE AIR VAPORMAX</figcaption>
      <figcaption className='shoe-shop'>Shop Now</figcaption>
</div>
<div className=' col-md-3 '>
  <img src={presto} className='shoe-image img-responsive'></img>
  <figcaption className='shoe-names'>NIKE AIR PRESTO</figcaption>
    <figcaption className='shoe-shop'>Shop Now</figcaption>
</div>
<div className='col-md-3'>
  <img src={metcon} className='shoe-image img-responsive'></img>
  <figcaption className='shoe-names'>NIKE METCON</figcaption>
  <figcaption className='shoe-shop'>Shop Now</figcaption>
</div>
  </div>
</div>
    )
  }
}

export default Shoes;

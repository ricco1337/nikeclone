import React, {Component} from 'react';
import '../../women.css';
import TopWomenShoe from './../../../assets/womentopshoe.jpg';



class WomenTopShoe extends Component {
  render() {
    return (
      <div>
        <div className='women-container'>
    <img src={TopWomenShoe} alt='womenShoe' className='img-responsive'></img>
    <figcaption className='women-shopnow-womenshoe'>SHOP NOW</figcaption>



          </div>

      </div>

    )
  }
}



export default WomenTopShoe;

import React, {Component} from 'react';
import '../../women.css';
import ShopBy from './../../../assets/womenshopby.jpg';



class WomenShopBy extends Component {
  render() {
    return (
      <div>
        <div className='women-container'>
          <div className='picture-header-container'>
          <h2 className='picture-headers'>SHOP BY</h2>
          </div>

<img src={ShopBy} alt='women-shopby' className='img-responsive'></img>
  <div className='men-latest-shoes-container'>
    <div className='row'></div>
    <div className='col-md-4 men-essentials-caption'>SHORTS
    </div>
      <div className='col-md-4 men-essentials-caption'>TOPS <br /> &TEES
      </div>
        <div className='col-md-4 men-essentials-caption'>BOARD <br /> SHORTS
        </div>


  </div>

          </div>

      </div>

    )
  }
}



export default WomenShopBy;

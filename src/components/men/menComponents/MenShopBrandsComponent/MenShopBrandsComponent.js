import React, {Component} from 'react';
import '../../men.css';
import ShopBrands from './../../../assets/ShopBrands.jpg'



class MenShopBrands extends Component {
  render() {
    return (
      <div>
        <div className='men-container'>
          <div className='men-picture-header-container'>
            <h2 className='men-picture-headers'>SHOP BY BRANDS</h2>
            </div>
<img src={ShopBrands} alt='shop-brands' className='img-responsive'></img>



          </div>

      </div>

    )
  }
}



export default MenShopBrands;

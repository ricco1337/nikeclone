import React, {Component} from 'react';
import '../../men.css';
import liftBro from './../../../assets/liftBro.jpg';




class MenTopShoe extends Component {
  render() {
    return (
      <div>
        <div className='men-container'>
          <h2>NIKE MEN</h2>
        <ul>
          <li>Shoes</li>
            <li>Clothing</li>
              <li>Just Released</li>
                <li>Gear Up</li>
                  <li>Back To School</li>
        </ul>
<img src={liftBro} alt='liftBro' className='liftBro img-responsive'></img>
<figcaption className='shop-now-top-shoe-men'>SHOP NOW</figcaption>



          </div>

      </div>

    )
  }
}



export default MenTopShoe;

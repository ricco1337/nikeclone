import React, {Component} from 'react';
import '../../men.css';
import liftBro from './../../../assets/liftBro.jpg';




class MenTopShoe extends Component {
  render() {
    return (
      <div>
        <div className='men-container'>

          <h2 className='nike-men-header'>NIKE MEN</h2>
          <div className='shoe-container'>
        <ul className='nike-men-top-captions-ul'>
          <li className='nike-men-top-captions'>Shoes</li>
          <hr />
            <li className='nike-men-top-captions'>Clothing</li>
            <hr />
              <li className='nike-men-top-captions'>Just Released</li>
              <hr />
                <li className='nike-men-top-captions'>Gear Up</li>
                <hr />
                  <li className='nike-men-top-captions'>Back To School</li>

        </ul>
        </div>
<img src={liftBro} alt='liftBro' className='liftBro img-responsive'></img>
<figcaption className='shop-now-top-shoe-men'>SHOP NOW</figcaption>



          </div>

      </div>

    )
  }
}



export default MenTopShoe;

import React, {Component} from 'react';
import '../../women.css';
import TopWomenShoe from './../../../assets/womentopshoe.jpg';



class WomenTopShoe extends Component {
  render() {
    return (
      <div>
        <div className='women-container'>
          <h2 className='nike-women-header'>NIKE WOMEN</h2>
          <div className='shoe-container'>
        <ul className='nike-women-top-captions-ul'>
          <li className='nike-women-top-captions'>Shoes</li>
          <hr />
            <li className='nike-women-top-captions'>Clothing</li>
            <hr />
              <li className='nike-women-top-captions'>Shorts</li>
              <hr />
                <li className='nike-women-top-captions'>Style Guide</li>
                <hr />
                  <li className='nike-women-top-captions'>Plus Size</li>

        </ul>
        </div>
    <img src={TopWomenShoe} alt='womenShoe' className='img-responsive'></img>
    <figcaption className='women-shopnow-womenshoe'>SHOP NOW</figcaption>



          </div>

      </div>

    )
  }
}



export default WomenTopShoe;

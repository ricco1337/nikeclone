import React, {Component} from 'react';
import '../../men.css';
import latestShoes from './../../../assets/menfootwear.jpg'


class MenShoes extends Component {
  render() {
    return (
      <div>
        <div className='men-container'>
          <div className='men-picture-header-container'>
          <h2 className='men-picture-headers'>OUR LATEST SHOES</h2>
          </div>


<img src={latestShoes} alt='latest-shoes' className='img-responsive'></img>


  <div className='men-latest-shoes-container'>
    <div className='row'></div>
    <div className='col-md-4 men-latest-shoes-caption'>TRAINING & GYM
    </div>
      <div className='col-md-4 men-latest-shoes-caption'>SOCCER
      </div>
        <div className='col-md-4 men-latest-shoes-caption'>JORDAN
        </div>


  </div>

          </div>

      </div>

    )
  }
}



export default MenShoes;

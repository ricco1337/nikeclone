import React, {Component} from 'react';
import '../../women.css';
import latestShoe from './../../../assets/womenfootwear.jpg';



class WomenLatestShoes extends Component {
  render() {
    return (
          <div className='women-container'>
            <div className='picture-header-container'>
            <h2 className='picture-headers'>LATEST SHOES</h2>
            </div>
        
<img src={latestShoe} alt='latestshoe' className='img-responsive'></img>
<div className='women-latest-shoes-container'>
  <div className='row'></div>
  <div className='col-md-3 latest-shoes-caption'>NIKEiD
    <p className='latest-shoe-types'>Nike Air Max 90 Premium iD</p>
  </div>
    <div className='col-md-3 latest-shoes-caption'>RUNNING
    <p className='latest-shoe-types'>Nike Free RN Flyknit 2017</p>
    </div>
      <div className='col-md-3 latest-shoes-caption'>GYM & TRAINING
    <p className='latest-shoe-types'>Nike Free Focus Flyknit 2 Indigo</p>
      </div>
        <div className='col-md-3 latest-shoes-caption'>LIFESTYLE
    <p className='latest-shoe-types'>Nike Air Max 90 SE</p>
        </div>


</div>
      </div>

    )
  }
}



export default WomenLatestShoes;

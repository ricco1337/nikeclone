import React, {Component} from 'react';
import '../../men.css';
import GearUpImage from './../../../assets/menGearUp.jpg';


class GearUp extends Component {
  render() {
    return (
      <div>
        <div className='men-container'>
<img src={GearUpImage} alt='gearUpImage' className='gearup img-responsive'></img>



          </div>

      </div>

    )
  }
}



export default GearUp;

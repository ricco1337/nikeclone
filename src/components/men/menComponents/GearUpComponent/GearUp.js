import React, {Component} from 'react';
import '../../men.css';
import GearUpImage from './../../../assets/menGearUp.jpg';


class GearUp extends Component {
  render() {
    return (
      <div>
        <div className='men-container'>
    <div className='gear-up-container'>
      <ul className='gear-up-top-text'>
        <li className='gearup-crosscountry'>GEAR UP: <br /> CROSS COUNTRY</li>
        <li className='gearup-football'>GEAR UP: <br /> FOOTBALL</li>
      </ul>
<img src={GearUpImage} alt='gearUpImage' className='gearup img-responsive'></img>

</div>

          </div>

      </div>

    )
  }
}



export default GearUp;

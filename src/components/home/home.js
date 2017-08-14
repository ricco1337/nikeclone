import React, {Component} from 'react';
import './home.css';

import FirstImage from './homeComponents/firstImage/firstImage.js';
import SecondImage from './homeComponents/secondImage/secondImage.js';
import ThirdImage from './homeComponents/thirdImage/thirdImage.js';
import FourthImage from './homeComponents/fourthImage/fourthImage.js';
import Shoes from './homeComponents/shoes/shoes.js';

class Home extends Component {
  render() {
    return (
      <div>
  <FirstImage />
    <SecondImage />
      <ThirdImage />
        <FourthImage />
         <Shoes />



  </div>
    )
  }
}



export default Home;

import React, {Component} from 'react';
import './home.css';

import FirstImage from './homeComponents/firstImage/firstImage.js';
import SecondImage from './homeComponents/secondImage/secondImage.js';
import ThirdImage from './homeComponents/thirdImage/thirdImage.js';
import FourthImage from './homeComponents/fourthImage/fourthImage.js';
import Shoes from './homeComponents/shoes/shoes.js';
import Footer from './components/../../footer/footer.js';


class Home extends Component {
  render() {
    return (
      <div>
  <FirstImage />
    <SecondImage />
      <ThirdImage />
        <FourthImage />
         <Shoes />

<Footer />
  </div>
    )
  }
}



export default Home;

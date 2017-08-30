import React, {Component} from 'react';
import './home.css';

import FirstImage from './homeComponents/firstImage/firstImage.js';
import SecondImage from './homeComponents/secondImage/secondImage.js';
import ThirdImage from './homeComponents/thirdImage/thirdImage.js';
import Footer from './components/../../footer/footer.js';


class Home extends Component {
  render() {
    return (
      <div>
  <FirstImage />
    <SecondImage />
      <ThirdImage />

<Footer />
  </div>
    )
  }
}



export default Home;

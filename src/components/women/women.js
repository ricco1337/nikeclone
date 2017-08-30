import React, {Component} from 'react';
import './women.css';
import WomenTopShoe from './womenComponents/WomenTopShoeComponent/womenTopShoe.js';
import WomenLatestShoes from './womenComponents/WomenLatestShoesComponent/latestShoes.js'
import WomenVideo from './womenComponents/WomenVideoComponent/WomenVideo.js';
import WomenShopBy from './womenComponents/ShopByComponent/shopBy.js';
import FurtherFitness from './womenComponents/FurtherFitnessComponent/furtherFitness.js';

import Footer from './components/../../footer/footer.js';


class Women extends Component {
  render() {
    return (
      <div>
        <div className='women-container'>
<WomenTopShoe />
<WomenLatestShoes />
<WomenVideo />
<WomenShopBy />
<FurtherFitness />
<Footer />
          </div>

      </div>

    )
  }
}



export default Women;

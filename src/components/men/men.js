import React, {Component} from 'react';
import './men.css';
import MenTopShoe from './menComponents/MenTopShoeComponent/MenTopShoe.js';
import GearUp from './menComponents/GearUpComponent/GearUp.js';
import MenEssentials from './menComponents/menEssentialsComponent/menEssentials.js';
import MenShoes from  './menComponents/menShoesComponent/menShoes.js'
import MenShopBrands from  './menComponents/MenShopBrandsComponent/MenShopBrandsComponent.js'
import SocialMediaApps from  './menComponents/SocialMediaApps/SocialApps.js'

import Footer from './components/../../footer/footer.js';



class Men extends Component {
  render() {
    return (
      <div>
        <MenTopShoe />
        <GearUp />
        <MenShoes />
<MenEssentials />
<MenShopBrands />
<SocialMediaApps />

<Footer />
      </div>

    )
  }
}



export default Men;

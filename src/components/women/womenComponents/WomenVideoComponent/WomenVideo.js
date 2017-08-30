import React, {Component} from 'react';
import '../../women.css';



class WomenVideo extends Component {
  render() {
    return (
        <div className='women-container'>

          <div >
                <video loop="true" muted="" autoPlay="true" className='women-video'>
                        <source src="https://nikevideo.nike.com/72451143001/201708/3224/72451143001_5538732384001_5538720616001.mp4" type="video/mp4"  />
                      </video>


              </div>
              <div className='women-video-text'>
<h1 className='women-video-header'>
  NIKE CORTEZ BY IGC
</h1>
<p className='women-video-caption'>
  Customize the Cortez with the International Girl Crew, a collective of <br />
travelers, entrepreneurs and friends. Choose colors and materials to <br />
capture LA, NYC or London vibes, then finish with a personal iD.
</p>
<button className='women-button'>SHOP THE COLLECTION</button>
</div>

</div>

    )
  }
}



export default WomenVideo;

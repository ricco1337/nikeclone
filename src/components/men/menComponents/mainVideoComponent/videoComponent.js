
import React, {Component} from 'react';
import '../../men.css';
class MenVideo extends Component {
  render() {
    return (
      <div>
        <div className='men-container'>


            <video loop="true" muted="" autoPlay="true" className="video-banner-bg">
                    <source src="https://nikevideo.nike.com/72451143001/201708/3567/72451143001_5544129802001_5544120527001.mp4" type="video/mp4"/>
                  </video>


          </div>

      </div>

    )
  }
}



export default MenVideo;

import React, {Component} from 'react';
import '../../women.css';
import FitnessFurther from './../../../assets/fitnessfurther.jpg';



class FurtherFitness extends Component {
  render() {
    return (
          <div className='women-container'>
            <div className='picture-header-container'>
            <h2 className='further-header'>TOOLS TO TAKE YOUR FITNESS FURTHER</h2>
            </div>
            <div>
<img src={FitnessFurther} alt='fitness-further' className='img-responsive'></img>

</div>

          </div>


    )
  }
}



export default FurtherFitness;

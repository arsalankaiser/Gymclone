import React from 'react'
import FeatureBox from "../components/FeatureBox"
import fimage1 from "../Image/1.svg"
import fimage2 from "../Image/2.svg"
import fimage3 from "../Image/3.svg"
import fimage4 from "../Image/4.svg"
function Feature() {
  return (
    <div id='features'>
        <h1>Featrures</h1>
        <div className="a-container">
            <FeatureBox image={fimage1} title="WeightLifting"/>
            <FeatureBox image={fimage2} title="Specific Muscle"/>
            <FeatureBox image={fimage3} title="Flex your Muscle"/>
            <FeatureBox image={fimage4} title="Cardio Exercise"/>
        </div>
    </div>
  )
}

export default Feature
import React from 'react'
import chart from '../images/icon-brand-recognition.svg'
import meter from '../images/icon-detailed-records.svg'
import tools from '../images/icon-fully-customizable.svg'

function Advanced(){
    return(
        <div id="advanced-main">
            <h1 id="advanced-title">Advanced Statistics</h1>
            <p id="advanced-desc">Track how your links are performing accross the web with <br /> our advanced statistics dashboard</p>
            
            {/* Three Boxes */}
            
            <div id="adv-three-box">
                <div id="box-1">
                    <img class = "box-image" src={chart} />
                    <h3>Brand Recognition</h3>
                    <p>Boost your brand recognition with each click.Generic links don't mean a thing. branded links help instil confidence in your content </p>
                </div>

                <div id="box-2">
                    
                    <img class = "box-image" src={meter} />
                    <h3>Brand Recognition</h3>
                    <p>Boost your brand recognition with each click.Generic links don't mean a thing. branded links help instil confidence in your content </p>

                </div>

                <div id="box-3">
                    <img class = "box-image" src={tools} />
                    <h3>Brand Recognition</h3>
                    <p>Boost your brand recognition with each click.Generic links don't mean a thing. branded links help instil confidence in your content </p>

                </div>

            </div>
        </div>
    )
}

export default Advanced;
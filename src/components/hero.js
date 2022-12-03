import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css'
import logo from '../images/logo.svg'

function Hero (){
    return(
        <div id="hero">
            <div id="nav">

                <div id="left-div">
                    <img src={logo} />
                    <p>Features</p>
                    <p>Pricing</p>
                    <p>Resources</p>
                    
                </div>

                <div id="right-div">
                    <button>Login</button>
                    <button>Sign Up</button>
                </div>
                
            </div>
            <div id="main-hero">
                <div id="hero-left">
                    <h2>More than just shorter links</h2><br />
                    <p>Buld your brand's recognition and get detailed insights on how your links are performing</p> <br />
                    <button>Get Started</button>
                </div>
                <div id="hero-right"></div>
            </div>
        </div>
    )
}

export default Hero;

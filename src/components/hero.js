import React from 'react';
import logo from '../images/logo.svg'
import heroImg from '../images/illustration-working.svg';

function Hero() {
    return (
        <div id="hero">
            <div id="nav">

                <div id="left-nav">
                    <img src={logo} />
                    <p>Features</p>
                    <p>Pricing</p>
                    <p>Resources</p>

                </div>

                <div id="right-nav">
                    <button>Login</button>
                    <button>Sign Up</button>
                </div>

            </div>
            <div id="main-hero">
                
                <div id="hero-left">
                    <h2 id="hero-title">More than just <br /> shorter links</h2><br />
                    <p id="hero-description">Buld your brand's recognition and get <br />detailed insights on how your links are performing</p> <br />
                    <button id="hero-button">Get Started</button>
                </div>
                <div id="hero-right">
                    <img src={heroImg} />
                </div>
            </div>
            <div id="search-box-layout">
                <div id="search-box">
                    <input id="search-bar" type="text" placeholder="Shorten a link here.." />
                    <button id="search-button">Shorten it !</button>
                </div>
            </div>

        </div>
    )
}

export default Hero;

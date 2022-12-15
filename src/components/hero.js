import React from 'react';
import logo from '../images/logo.svg'
import heroImg from '../images/illustration-working.svg';



function Hero() {

    async function urlShort() {
        
    const searchBar = document.getElementById("search-bar").value;
    const api = fetch(`https://api.shrtco.de/v2/shorten?url=${searchBar}`);
    const link = api.then( (response) => response.json())
    .then( (data)=> {

        // data.result.full_short_link 
       
       
        document.getElementById("short-link").textContent = data.result.full_short_link;
        
    })
    document.getElementById("result-box").style.display = 'block';
    const realLink = document.getElementById("main-url");
    realLink.textContent = searchBar;
    
    const copyButton = document.getElementById('copy-button');
    copyButton.addEventListener('click', clipboardCopy);
    async function clipboardCopy() {
      let text = document.querySelector("#short-link").textContent;
      await navigator.clipboard.writeText(text);
      copyButton.textContent = "Copied!";
    //   copyButton.style.background-color = "#3a3053";  ------------ > need to fix
    }


    

    };

   
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
                    <button className="hero-button">Login</button>
                    <button className="hero-button">Sign Up</button>
                </div>

            </div>
            <div id="main-hero">
                
                <div id="hero-left">
                    <h2 id="hero-title">More than just <br /> shorter links</h2><br />
                    <p id="hero-description">Buld your brand's recognition and get <br />detailed insights on how your links are performing</p> <br />
                    <button className="hero-button">Get Started</button>
                </div>
                <div id="hero-right">
                    <img src={heroImg} />
                </div>
            </div>

            <div id="search-box-layout">
                
                <div id="search-box">
                    <input id="search-bar" type="text" placeholder="Shorten a link here.." />
                    <button onClick={urlShort} id="search-button"> Shorten it!</button>
                    
                </div>

                {/* Result Box */}

                <div id="result-box"> 
                    <div id="inner-result">
                        <div id="result-left">

                        <p id="main-url"> </p>

                        </div>

                        <div id="result-right">
                            <p id="short-link">  </p>
                            <button id="copy-button"> Copy </button>

                        </div>
                    </div>   

                </div>
                
            </div>
            

        </div>
    )
}

export default Hero;

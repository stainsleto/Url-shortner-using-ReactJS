import React from 'react'


function SearchBox(){
    return(
        <div id="search-box-main">
           
            <input id="search-bar" type="text" placeholder="Shorten a link here.." />
            <button id="search-button">Shorten it !</button>
        
        </div>
    )
}

export default SearchBox;
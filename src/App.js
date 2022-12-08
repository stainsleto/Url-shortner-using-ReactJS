import React from 'react';
import Hero from './components/hero'
import Banner from './components/banner';
import './App.css';
import './sam.css';
import SearchBox from './components/searchBox'
import Advanced from './components/advanced'


function App() {
  return (
    <div>
      <Hero />
      <SearchBox />
      <Advanced />
      <Banner />
      <footer />
      
    </div>

  );
}

export default App;

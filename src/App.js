import React from 'react';
import Hero from './components/hero'
import Banner from './components/banner';
import './App.css';
import './sam.css';
import SearchBox from './components/searchBox'
import Advanced from './components/advanced'
import Footer from "./components/footer"


function App() {
  return (
    <div>
      <Hero />
      <Advanced />
      <Banner />
      <Footer />
      
    </div>

  );
}

export default App;

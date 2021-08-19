import React from 'react';
import logo from './assets/logo.png';
import './App.css';

import home from "./components/home-header/home";
import Music from "./components/music-section/Music";

function App() {
  return (
    <div>
      <div className="header-section">
        <header>
          <div className="logo-div">
            <img className="logo-art" src={logo}></img>
          </div>
        </header>
      </div>
       <Music />
    </div>
      

     
    

    
  );
}

export default App;

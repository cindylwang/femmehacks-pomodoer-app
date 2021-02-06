import './App.css';
import ReactDOM from 'react';
import OurTimer from './components/Timer/Timer';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import React, { ComponentType, useState, useRef } from 'react';

  
function App() {  
  
  return (
    <div className="App">
        <header className="App-header">
          <a> 
            Pomodoer
          </a>
        </header>
        <div>
          <OurTimer /> 
        </div>
        

    </div>
  );
}

export default App;
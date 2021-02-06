import './App.css';
import ReactDOM from 'react';
import Timer from './components/Timer/Timer';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import React, { ComponentType, useState, useRef } from 'react';


function App() {   
  return (
    <div className="App">
      <Container>
        <header className="App-header">
          <a>
          
            Pomodoer
          </a>
        </header>
      </Container>
      <Jumbotron> 
        <Timer startCount = '1000' />
      </Jumbotron> 
    </div>
  );
}

export default App;
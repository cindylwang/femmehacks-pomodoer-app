import React from 'react';
//mock data
// import data from "./data.json";
//components
import ToDoList from "./ToDoList";
// import './App.css';
import './ToDoList.css';
// import useChat from "../useChat";


import OurTimer from './Timer';

const Collab = (props) => {
  
  const {roomId} =  props.match.params;

  return (
    <div className="App">
        <div className="App-header">
          <header>
            <h1> 
              POMODOER
            </h1>
          </header>
       </div>
        <div className='timer'>
          <OurTimer room={roomId}/> 
        </div>
        <ToDoList room={roomId}/>
      
    </div>
  );
}

export default Collab;
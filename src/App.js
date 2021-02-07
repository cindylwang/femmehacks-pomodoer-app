import React, { useState } from 'react';
//mock data
import data from "./data.json";
//components
import ToDoList from "./ToDoList";
import ToDoForm from './ToDoForm';
// import './App.css';
import './ToDoList.css';

import OurTimer from './Timer';

function App() {
  
  const [ toDoList, setToDoList ] = useState(data);

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }

  const addTask = (userInput ) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);
  }

  // const listStyle = {
  //   color: "white",
  //   backgroundColor: "DodgerBlue",
  //   border: '2px',
  //   fontFamily: "Arial"
  // };

  return (
    <div className="App">
        <div className="App-header">
          <header>
            <a> 
              POMODOER
            </a>
          </header>
       </div>
        <div className="timer">
          <OurTimer /> 
        </div>
        <div className ="listComponent">
          <div className='ToDoForm'>
            <div className="toDoFormTitle">
              <p>TASKS:</p>
            </div>
            
            <ToDoForm addTask={addTask}/>

          </div>
        <div className="ToDoList">
          <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
        </div>
        </div>
      
      
    </div>
  );
}

export default App;
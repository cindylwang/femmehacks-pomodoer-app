// import './App.css';
import ReactDOM from 'react';
import OurTimer from './components/Timer/Timer';
import data from "./components/Timer/data.json";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import React, { ComponentType, useState, useRef } from 'react';
import ToDoList from "./components/Timer/ToDoList";
import ToDoForm from './components/Timer/ToDoForm';
import './components/Timer/ToDoList.css';

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
?
  const addTask = (userInput ) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);
    return copy;
  }
  
  return (
   <div>
      <div className="App-header">
        <header className="App-header">
          <a> 
            Pomodoer
          </a>
        </header>
       </div>
        <div className="timer-color">
          <OurTimer /> 
        </div>
        <div className="App">
          <div className='ToDoForm'>
            <div className="toDoFormTitle">
              <p>TASKS:</p>
            </div>
            
            {/* <ToDoForm addTask={addTask} /> */}

          </div>
        <div className="ToDoList">
          {/* <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/> */}
        </div> 
        
        
      </div>
   </div>
  );
}

export default App;
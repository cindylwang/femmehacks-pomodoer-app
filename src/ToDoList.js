import React from 'react';
import ToDo from './ToDo';
import './ToDoList.css';
import Button from 'react-bootstrap/Button';

const ToDoList = ({toDoList, handleToggle, handleFilter}) => {
    return (
        <div>
            <p>TO DO:</p>
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
                )
            })}
            <div className ='center'>
                 <Button variant="primary" onClick={handleFilter}>CLEAR</Button>
            </div>
                
            
        </div>
    );
};

export default ToDoList;
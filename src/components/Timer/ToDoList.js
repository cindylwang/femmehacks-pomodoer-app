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

                <Button style ={{ marginLeft:'5px', marginTop:"20px", marginBottom:'15px', borderRadius: '3px'}}variant="primary" onClick={handleFilter}>clear</Button>
            
        </div>
    );
};

export default ToDoList;
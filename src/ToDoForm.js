import React, { useState } from 'react';
import './ToDoList.css'

const ToDoForm = ({ addTask }) => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    return (
        <form className="toDoFormForm" onSubmit={handleSubmit}>       
            <div>
                <input className='inputBar' value={userInput} type="text" onChange={handleChange} placeholder=" add a task..."/>
            </div> 
        </form>
    );
};

export default ToDoForm;
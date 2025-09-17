import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { Link } from 'react-router-dom';
import "./toDoList.css"

function ToDoList() {
    let storage = localStorage;
    let inputRef = useRef();
    let [activeIndex, setActiveIndex] = useState(null);
    let [value, setValue] = useState('')
    let [tasks, setTasks] = useState(() => {
        let saved = storage.getItem('tasks');
        return saved ? JSON.parse(saved) : []
    });

    let changeValue = (e) => {
        setValue(e.target.value)
             
    }

    let createTask = () => {
        if (!value) { return }
        let newTasks = [...tasks, value]
        setTasks(newTasks)
        setValue('')
        storage.setItem('tasks', JSON.stringify(newTasks))
        inputRef.current.focus()
    }

    let deleteTask = (text) => {
        setActiveIndex(text)
        setTimeout(() => {
            let newTasks = tasks.filter(task => task !== text);
            setTasks(newTasks)
            storage.setItem('tasks', JSON.stringify(newTasks))
        },300)
        
    }


    return (
        <>
        
        <div className='todoContainer'>       
        <h1 style={{fontSize:'40px'}}>Список задач</h1>
        <div className='todoMain'>
            <div className='inputContainer'>
            <input ref={inputRef} type="text" maxLength={18} value={value} onChange={changeValue} placeholder='Введите задачу'></input><button onClick={createTask}>Создать</button>
            </div>
            <ul>
                {tasks.map((task) => {
                    return <li key={task} className={activeIndex === task ? 'todo-liDeleted' : 'todo-li'}><span className="todo-span">{task} <button className='todo-delete-btn' onClick={() => deleteTask(task)}>X</button> </span> </li> 
                })}
                
            </ul>
        </div>
         </div>
        </>
    )
    
}


export default ToDoList
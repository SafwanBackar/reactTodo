import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

function Todo() {

    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })
    return todos.map((todo, index) =>{
        <div className={todo.isComplete ? 'todo-row complete': 'todo-row'}
        key={index}
        >
            
        </div>
    })



}
import React from 'react';
import Task from '../Task/task';
import './task-list.css';

const TaskList = ({todos, onDeleted}) => {

    const element = todos.map((item) => {
        
        return (
            <Task 
            {...item} 
            onDeleted = {()=> onDeleted(item.id)}/>
        )
    })

    return (
        <ul className='todo-list'>
            {element}
        </ul>
    )
}

export default TaskList;
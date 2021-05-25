import React from 'react';
import Task from '../Task/task';
import './task-list.css';

const TaskList = ({todos}) => {

    const element = todos.map((item) => {
        
        return (
            <Task {...item} />
        )
    })

    return (
        <ul className='todo-list'>
            {element}
        </ul>
    )
}

export default TaskList;
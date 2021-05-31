import React from 'react';
import Task from '../Task/task';
import './task-list.css';

const TaskList = (props) => {
    
    const {todos, onDeleted, onNotDone} = props
    
    TaskList.defaultProps = {  //дефолтные пропсы
        onDeleted : () => {},
        onNotDone: () => {},
    }

    const element = todos.map((item) => {
        
        return (
            <Task 
            {...item} 
            onDeleted = {() => onDeleted(item.id)}
            onNotDone = {() => onNotDone(item.id)}/>
        )
    })

    return (
        <ul className='todo-list' >
            {element}
        </ul>
    )
}

export default TaskList;
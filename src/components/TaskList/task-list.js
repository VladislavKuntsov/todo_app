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

    const {id, ...items} = item

        return (
            <Task key={id}
            { ...items } 
            onDeleted = {() => onDeleted(id)}
            onNotDone = {() => onNotDone(id)}/>
        )
    })

    return (
        <ul className='todo-list' >
            {element}
        </ul>
    )
}

export default TaskList;
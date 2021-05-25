import React from 'react';
import TaskFilter from '../TasksFilter/task-filter';
import '../Footer/footer.css';

const Footer = ({todos}) => {

    const element = todos.splice(0,3).map((item) => {
        
        const {id, ...itemProps} = item;
        
        return (
            <li key={id}>
                <TaskFilter {...itemProps}/>
            </li>
        )
    })

    return (
        <footer className="footer">
            <span className="todo-count">1 items left</span>
            <ul className='filters'>
                {element}    
            </ul>
            <TaskFilter {...todos[todos.length - 1]}/> 
        </footer> 
    )
}

export default Footer;
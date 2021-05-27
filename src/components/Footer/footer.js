import React from 'react';
import TaskFilter from '../TasksFilter/task-filter';
import '../Footer/footer.css';

const Footer = ({todos, clearCompleted, filter, onFilterChange}) => {
    
    return (
        
        <footer className="footer">
            <span className="todo-count">{todos} items left</span>
            <TaskFilter 
            filter = { filter } 
            onFilterChange = { onFilterChange} //// хз
            />
            <button 
            className="clear-completed"
            onClick = { clearCompleted }>
            Clear completed</button>
        </footer> 
    )
}

export default Footer;
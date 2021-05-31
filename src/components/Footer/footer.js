import React from 'react';
//import PropTypes from 'prop-types'
import TaskFilter from '../TasksFilter/task-filter';
import '../Footer/footer.css';

const Footer = (props) => {
   let {doneCount, clearCompleted, filter, onFilterChange} = props
   // doneCount = "Я не число";


    Footer.defaultProps = { //дефолтные пропсы
        clearCompleted: () => {},
        onFilterChange: () => {},
    }

    Footer.propTypes = {  //проверяем является ли doneCount числом, но чет ему совсем пох)
        doneCount: (props, propName, componentName) => { 
            const value = props[propName];

            if(typeof value === 'number' && !isNaN(value)) {
                return null;    
            }

            return new TypeError (`${componentName}: ${propName} must be number`);
        },
    }

    return (
        
        <footer className="footer">
            <span className="todo-count">{doneCount} items left</span>
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
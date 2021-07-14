import React from 'react';
import PropTypes from 'prop-types';
import TaskFilter from '../TasksFilter/task-filter';
import './footer.css';

const Footer = ({ doneCount, clearCompleted, filter, onFilterChange }) => {
  const itemsLeft = ' items left';

  Footer.defaultProps = {
    clearCompleted: () => {},
    onFilterChange: () => {},
  };

  Footer.propTypes = {
    clearCompleted: PropTypes.func,
    onFilterChange: PropTypes.func,
    doneCount: PropTypes.number.isRequired,
    filter: PropTypes.string.isRequired,
  };

  return (
    <footer className="footer">
      <span className="todo-count">
        {doneCount}
        {itemsLeft}
      </span>
      <TaskFilter filter={filter} onFilterChange={onFilterChange} />
      <button type="button" className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;

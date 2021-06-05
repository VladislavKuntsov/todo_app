import React from 'react';
import PropTypes from 'prop-types';
import TaskFilter from '../TasksFilter/task-filter';
import './footer.css';

const Footer = (props) => {
  const { doneCount, clearCompleted, filter, onFilterChange } = props;

  Footer.defaultProps = {
    // дефолтные пропсы
    clearCompleted: () => {},
    onFilterChange: () => {},
  };

  Footer.propTypes = {
    // проверяем является ли doneCount числом, но чет ему совсем пох)
    clearCompleted: PropTypes.func,
    onFilterChange: PropTypes.func,
    doneCount: PropTypes.number.isRequired,
    filter: PropTypes.string.isRequired,
  };

  return (
    <footer className="footer">
      <span className="todo-count">{doneCount} items left</span>
      <TaskFilter filter={filter} onFilterChange={onFilterChange} />
      <button type="button" className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;

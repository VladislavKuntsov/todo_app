import React from 'react';
import PropTypes from 'prop-types';

function TaskFilter({ filter, onFilterChange }) {
  const buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'completed', label: 'Completed' },
  ];

  const buttonsFilter = buttons.map(({ name, label }) => {
    const isActive = filter === name;
    const classCurrent = isActive ? 'selected' : '';

    return (
      <li key={name}>
        <button type="button" className={classCurrent} onClick={() => onFilterChange(name)}>
          {label}
        </button>
      </li>
    );
  });

  return <ul className="filters">{buttonsFilter}</ul>;
}

TaskFilter.defaultProps = {
  onFilterChange: () => {},
};

TaskFilter.propTypes = {
  onFilterChange: PropTypes.func,
  filter: PropTypes.string.isRequired,
};

export default TaskFilter;

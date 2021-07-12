import React from 'react';
import PropTypes from 'prop-types';
import Task from '../Task/task';
import './task-list.css';

const TaskList = (props) => {
  const { todos, onDeleted, onNotDone, taskData, setTime } = props;

  TaskList.defaultProps = {
    onDeleted: () => {},
    onNotDone: () => {},
    setTime: () => {},
  };

  TaskList.propTypes = {
    onDeleted: PropTypes.func,
    onNotDone: PropTypes.func,
    setTime: PropTypes.func,
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    taskData: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  const element = todos.map((item) => {
    const { id, timeSec, ...items } = item;

    return (
      <Task
        key={id}
        id={id}
        timeSec={timeSec}
        {...items}
        taskData={taskData}
        onDeleted={() => onDeleted(id)}
        onNotDone={() => onNotDone(id)}
        setTime={setTime}
      />
    );
  });

  return <ul className="todo-list">{element}</ul>;
};

export default TaskList;

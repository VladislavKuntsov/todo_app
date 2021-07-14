import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './new-task-form.css';

function NewTaskForm({ onTaskAdd }) {
  const [label, setLabel] = useState(null);
  const [min, setMin] = useState(null);
  const [sec, setSec] = useState(null);

  const onLabelChange = (event) => {
    setLabel(event.target.value);
  };

  const onTimeMin = (event) => {
    setMin(Number(event.target.value));
  };

  const onTimeSec = (event) => {
    setSec(Number(event.target.value));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    onTaskAdd(label, min, sec);
    event.target.reset();

    setLabel(null);
    setMin(null);
    setSec(null);
  };

  return (
    <form onSubmit={onSubmit} className="form">
      <input className="new-todo" type="text" required placeholder="What needs to be done?" onChange={onLabelChange} />
      <input className="time-min" type="number" min="0" maxLength="2" required placeholder="Min" onChange={onTimeMin} />
      <input className="time-sec" type="number" min="0" maxLength="2" required placeholder="Sec" onChange={onTimeSec} />
      <button type="submit" aria-label="submit" />
    </form>
  );
}

NewTaskForm.defaultProps = {
  onTaskAdd: () => {},
};

NewTaskForm.propTypes = {
  onTaskAdd: PropTypes.func,
};

export default NewTaskForm;

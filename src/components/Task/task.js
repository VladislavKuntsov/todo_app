import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './task.css';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

function Task({ label, classNameLi, done, onDeleted, onNotDone, сreationTime, timeSec, id, pastTime, setTime }) {
  const [pastTimeSet, setPastTime] = useState(pastTime);
  const [timeSecSet, setTimeSec] = useState(timeSec);
  const [playPauseSet, setPlayPause] = useState(false);

  const playTime = () => {
    setPlayPause(true);
  };

  const pauseTime = () => {
    setPlayPause(false);
  };

  useEffect(() => {
    let timeCreationId = null;
    let timerId = null;

    timeCreationId = setInterval(() => {
      const newPastTime = ` ${formatDistanceToNow(сreationTime, { addSuffix: true })}`;
      setPastTime(newPastTime);
    }, 300000);

    if (playPauseSet) {
      timerId = setInterval(() => {
        setTimeSec(timeSecSet - 1);
      }, 1000);
    }

    if (!playPauseSet || timeSecSet === 0 || done) {
      clearInterval(timerId);
    }

    return () => {
      clearInterval(timerId);
      clearInterval(timeCreationId);
    };
  }, [playPauseSet, timeSecSet, done, сreationTime]);

  useEffect(() => () => setTime(timeSecSet, id, pastTimeSet));

  const hours = Math.floor(timeSecSet / 60);
  const minutes = timeSecSet % 60 < 10 ? `0${timeSecSet % 60}` : timeSecSet % 60;
  const timeExecutionTask = `${hours}:${minutes}`;

  return (
    <li className={classNameLi}>
      <div className="view">
        <input className="toggle" type="checkbox" readOnly="readonly" checked={done} onClick={onNotDone} />
        <div className="label">
          <span aria-hidden="true" className="description" onClick={onNotDone}>
            {label}
          </span>
          <span className="timer">
            <button type="button" onClick={playTime} className="icon icon-play" aria-label="play" />
            <button type="button" onClick={pauseTime} className="icon icon-pause" aria-label="pause" />
            {timeExecutionTask}
          </span>
          <span className="created">
            created
            {pastTimeSet}
          </span>
          <button aria-label="edit" type="button" className="icon icon-edit" />
          <button aria-label="destroy" type="button" className="icon icon-destroy" onClick={onDeleted} />
        </div>
      </div>
    </li>
  );
}

Task.defaultProps = {
  onDeleted: () => {},
  onNotDone: () => {},
  setTime: () => {},
};

Task.propTypes = {
  onDeleted: PropTypes.func,
  onNotDone: PropTypes.func,
  setTime: PropTypes.func,
  label: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  classNameLi: PropTypes.string.isRequired,
  сreationTime: PropTypes.objectOf(PropTypes.object).isRequired,
  id: PropTypes.string.isRequired,
  timeSec: PropTypes.number.isRequired,
  pastTime: PropTypes.string.isRequired,
};

export default Task;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './task.css';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

export default class Task extends Component {
  state = {
    pastTime: null,
    timeSec: null,
    /* timerId: null, */
    id: null,
    playPause: false,
  };

  static defaultProps = {
    onDeleted: () => {},
    onNotDone: () => {},
    setTime: () => {},
  };

  static propTypes = {
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

  componentDidMount() {
    /* монтирование */
    const { timeSec, id, pastTime } = this.props;

    this.setState({
      timeSec,
      id,
      pastTime,
    });

    this.intervalID = setInterval(this.pastTimeTask, 300000);
  }

  componentDidUpdate() {
    /* обновление состояния */
    const { playPause } = this.state;

    if (playPause === true) {
      clearInterval(this.timerId);
      this.timerId = setInterval(this.tick, 10);
    }

    if (playPause === false) {
      clearInterval(this.timerId);
    }
  }

  componentWillUnmount() {
    /* размонтирование */

    const { setTime } = this.props;
    const { timeSec, id, pastTime } = this.state;

    clearInterval(this.timerId);
    clearInterval(this.intervalID);
    setTime(timeSec, id, pastTime);
  }

  tick = () => {
    const { timeSec } = this.state;
    const { done } = this.props;

    if (timeSec === 0 || done === true) {
      this.pauseTime();
    } else this.setState({ timeSec: timeSec - 1 });
  };

  playTime = () => {
    this.setState({ playPause: true });
  };

  pauseTime = () => {
    this.setState({ playPause: false });
  };

  pastTimeTask = () => {
    const { сreationTime } = this.props;
    this.setState({ pastTime: ` ${formatDistanceToNow(сreationTime, { addSuffix: true })}` });
  };

  render() {
    const { label, classNameLi, done, onDeleted, onNotDone } = this.props;
    const { pastTime, timeSec } = this.state;

    const hours = Math.floor(timeSec / 60);
    const minutes = timeSec % 60 < 10 ? `0${timeSec % 60}` : timeSec % 60;

    return (
      <li className={classNameLi}>
        <div className="view">
          <input className="toggle" type="checkbox" readOnly="readonly" checked={done} onClick={onNotDone} />
          <div className="label">
            <span aria-hidden="true" className="description" onClick={onNotDone}>
              {label}
            </span>
            <span className="timer">
              <button type="button" onClick={this.playTime} className="icon icon-play" aria-label="play" />
              <button type="button" onClick={this.pauseTime} className="icon icon-pause" aria-label="pause" />
              {hours}:{minutes}
            </span>
            <span className="created">
              created
              {pastTime}
            </span>

            <button aria-label="edit" type="button" className="icon icon-edit" />
            <button aria-label="destroy" type="button" className="icon icon-destroy" onClick={onDeleted} />
          </div>
        </div>
      </li>
    );
  }
}

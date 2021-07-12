import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './task.css';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

export default class Task extends Component {
  state = {
    pastTime: ' less than a minute ago',
    timeSec: null,
    timerId: null,
    id: null,
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
  };

  componentDidMount() {
    const { timeSec, id } = this.props;

    this.setState({
      timeSec,
      id,
    });
  }

  componentWillUnmount() {
    const { setTime } = this.props;
    const { timeSec, id } = this.state;
    setTime(timeSec, id);
  }

  tick = () => {
    const { timeSec } = this.state;
    const { done } = this.props;

    if (done) this.pauseTime();

    this.setState({ timeSec: timeSec - 1 });
  };

  playTime = () => {
    const { done } = this.props;

    if (done) this.pauseTime();

    const timerId = setInterval(this.tick, 1000);
    this.setState({ timerId });
  };

  pauseTime = () => {
    const { timerId } = this.state;

    clearInterval(timerId);
  };

  pastTimeTask = (сreationTime) => {
    this.setState({ pastTime: ` ${formatDistanceToNow(сreationTime, { addSuffix: true })}` });
  };

  clearintervalID = () => {
    clearInterval(this.intervalID);
  };

  render() {
    const { label, сreationTime, classNameLi, done, onDeleted, onNotDone } = this.props;
    const { pastTime, timeSec } = this.state;

    this.intervalID = setInterval(() => {
      this.pastTimeTask(сreationTime);
      return this.clearintervalID();
    }, 60000);

    const hours = Math.floor(timeSec / 60);
    const minutes = timeSec % 60;

    return (
      <li className={classNameLi}>
        <div className="view">
          <input className="toggle" type="checkbox" readOnly="readonly" checked={done} onClick={onNotDone} />
          <div className="label">
            <span aria-hidden="true" className="description" onClick={onNotDone}>
              {label}
            </span>
            <span>
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

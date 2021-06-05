import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './task.css';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

export default class Task extends Component {
  state = {
    pastTime: ' less than a minute ago',
  };

  static defaultProps = {
    onDeleted: () => {},
    onNotDone: () => {},
  };

  static propTypes = {
    onDeleted: PropTypes.func,
    onNotDone: PropTypes.func,
    label: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
    classNameLi: PropTypes.string.isRequired,
    сreationTime: PropTypes.objectOf(PropTypes.object).isRequired,
  };

  pastTimeTask = (сreationTime) => {
    this.setState({ pastTime: ` ${formatDistanceToNow(сreationTime, { addSuffix: true })}` });
  };

  clearintervalID = () => {
    clearInterval(this.intervalID);
  };

  render() {
    const { label, сreationTime, classNameLi, done, onDeleted, onNotDone } = this.props;

    const { pastTime } = this.state;

    this.intervalID = setInterval(() => {
      this.pastTimeTask(сreationTime);
      return this.clearintervalID();
    }, 60000);

    return (
      <li className={classNameLi}>
        <div className="view">
          <input className="toggle" type="checkbox" readOnly="readonly" checked={done} onClick={onNotDone} />
          <label>
            <span aria-hidden="true" className="description" onClick={onNotDone}>
              {label}
            </span>
            <span className="created">
              created
              {pastTime}
            </span>
          </label>
          <button aria-label="edit" type="button" className="icon icon-edit" />
          <button aria-label="destroy" type="button" className="icon icon-destroy" onClick={onDeleted} />
        </div>
      </li>
    );
  }
}

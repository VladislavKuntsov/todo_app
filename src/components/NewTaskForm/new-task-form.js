import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './new-task-form.css';

export default class NewTaskForm extends Component {
  state = {
    label: '',
    min: null,
    sec: null,
  };

  static defaultProps = {
    onTaskAdd: () => {},
  };

  static propTypes = {
    onTaskAdd: PropTypes.func,
  };

  onLabelChange = (event) => {
    this.setState({ label: event.target.value });
  };

  onTimeMin = (event) => {
    this.setState({ min: Number(event.target.value) });
  };

  onTimeSec = (event) => {
    this.setState({ sec: Number(event.target.value) });
  };

  onSubmit = (event) => {
    const { label, min, sec } = this.state;
    const { onTaskAdd } = this.props;

    event.preventDefault(); // браузер не будет перезагружать страницу
    onTaskAdd(label, min, sec);
    event.target.reset();

    this.setState({
      label: '',
      min: null,
      sec: null,
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className="form">
        <input
          className="new-todo"
          type="text"
          required
          placeholder="What needs to be done?"
          onChange={this.onLabelChange}
        />
        <input
          className="time-min"
          type="number"
          min="0"
          maxLength="2"
          required
          placeholder="Min"
          onChange={this.onTimeMin}
        />
        <input
          className="time-sec"
          type="number"
          min="0"
          maxLength="2"
          required
          placeholder="Sec"
          onChange={this.onTimeSec}
        />
        <button type="submit" aria-label="submit" />
      </form>
    );
  }
}

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './new-task-form.css';

export default class NewTaskForm extends Component {
  state = {
    label: '',
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

  onSubmit = (event) => {
    const { label } = this.state;
    const { onTaskAdd } = this.props;

    event.preventDefault(); // браузер не будет перезагружать страницу
    onTaskAdd(label);
    event.target.reset();
    this.setState({ label: '' });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input className="new-todo" type="text" placeholder="What needs to be done?" onChange={this.onLabelChange} />
      </form>
    );
  }
}

import React, { Component } from 'react';
import './new-task-form.css';

export default class NewTaskForm extends Component {

    static defaultProps = { //дефолтные пропсы
        onLabelChange: () => {},
        onSubmit: () => {}
    } 

    state = {
        label: '',
    }

    onLabelChange = (event) => {
        this.setState( {label: event.target.value} );
    }
    
    onSubmit = (event) => {
        event.preventDefault(); //браузер не будет перезагружать страницу
        this.props.onTaskAdd(this.state.label)       
        event.target.reset() 
        this.setState( {label: ""} );
    }

    render() {
        return (
            <form
                onSubmit={ this.onSubmit }>
                <input className="new-todo"
                    type='text' 
                    placeholder='What needs to be done?' 
                    autoFocus={ true } 
                    onChange={ this.onLabelChange }
                />
            </form>
              
        )
    }
}


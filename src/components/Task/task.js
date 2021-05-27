import React, {Component} from 'react';
import './task.css';

export default class Task extends Component {

    render() {
        let {label, classNameLi, id, done, onDeleted, onNotDone} = this.props;

        return (
            <li className={classNameLi} key={id}>
                <div className='view'>
                    <input className="toggle" type="checkbox" readOnly = "readonly" checked={done}
                    onClick = { onNotDone }
                    />
                    <label>
                        <span className='description' 
                        onClick = { onNotDone }
                        >
                        {label}
                        </span>
                        <span className="created">created ... seconds ago</span>      
                    </label>
                    <button className="icon icon-edit"></button>
                    <button className="icon icon-destroy" 
                    onClick = { onDeleted }></button>
                </div>
            </li>
        )
    }
}
import React, {Component} from 'react';
import './task.css';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
export default class Task extends Component {

    render() {
        let {label, сreationTime, classNameLi, id, done, onDeleted, onNotDone} = this.props;
        
        let timePassed;
        timePassed = formatDistanceToNow(сreationTime, { addSuffix: true });

        this.interval = setInterval(()=> {
            timePassed = formatDistanceToNow(сreationTime, { addSuffix: true });
            this.forceUpdate()
        }, 300000) //обновляю каждые 5 минут

        return (
            <li className={classNameLi} key={id}>
                <div className='view' >
                    <input className="toggle" type="checkbox" readOnly = "readonly" checked={done}
                    onClick = { onNotDone }
                    />
                    <label >
                        <span className='description' 
                        onClick = { onNotDone }
                        >
                        {label}
                        </span>
                        <span className="created">created {timePassed}</span>      
                    </label>
                    <button className="icon icon-edit"></button>
                    <button className="icon icon-destroy" 
                    onClick = { onDeleted }></button>
                </div>
            </li>
        )
    }
}
import React from 'react';
import './task.css';

const Task = ({label, classNameLi, id}) => {

    return (
        <li className={classNameLi} key={id}>
            <div className='view'>
                <input className="toggle" type="checkbox" />
                <label>
                    <span className='description'>{label}</span>
                    <span className="created">created ... seconds ago</span>      
                </label>
                <button className="icon icon-edit"></button>
                <button className="icon icon-destroy"></button>
            </div>
        </li>
    )
}

export default Task;

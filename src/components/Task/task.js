import React, {Component} from 'react';
import './task.css';

export default class Task extends Component {

        onlabelClick = () => {
            this.setState(({done}) => {
                return {
                    done: !done
                }
            }) 
        };

        state =  {
            done: false,

        };

    render() {
        let {label, classNameLi, id, onDeleted} = this.props;
        const {done} = this.state;

        if(done) {
            classNameLi = "completed";
        }

            
        return (
            <li className={classNameLi} key={id}>
                <div className='view'>
                    <input className="toggle" type="checkbox" />
                    <label>
                        <span className='description' 
                        onClick = { this.onlabelClick.bind(this) }
                        >
                        {label}
                        </span>
                        <span className="created">created ... seconds ago</span>      
                    </label>
                    <button className="icon icon-edit"></button>
                    <button className="icon icon-destroy" 
                    onClick = {onDeleted}></button>
                </div>
            </li>
        )
    }
}
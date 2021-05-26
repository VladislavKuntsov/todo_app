import React, {Component} from 'react';
import ReactDom from 'react-dom';
import NewTaskForm from './components/NewTaskForm/new-task-form';
import TaskList from './components/TaskList/task-list';
import Footer from './components/Footer/footer';
import '../src/index.css';

export default class App extends Component {

    state = {
        taskData: [
        {label: 'Completed task', classNameLi: 'editing', id: 1},
        {label: 'Edition task', classNameLi: 'editing', id: 2},
        {label: 'Active task', id: 3},
        ]   
    }
    
    

    deleteItem = (id) => {
        this.setState( ({taskData}) => {

            const idx = taskData.findIndex((el)=> el.id === id)
            const newArray = [...taskData.slice(0, idx), ...taskData.slice(idx + 1)]

            return {
                taskData: newArray
            }
        }) 
    }   

    render () {

        return (
            <section className='todoapp'>
                <header className='header'>
                    <h1>todos</h1>
                    <NewTaskForm />
                </header>
                <section className='main'>
                    <TaskList 
                    todos = {this.state.taskData}
                    onDeleted = { this.deleteItem}
                    /> 
                    <Footer 
                    deleteCompleted = {this.deleteCompletedTasks}
                    />    
                </section>
            </section>   
        )
    }
}

ReactDom.render(<App />, document.getElementById('root'));
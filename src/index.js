import React from 'react';
import ReactDom from 'react-dom';
import NewTaskForm from './components/NewTaskForm/new-task-form';
import TaskList from './components/TaskList/task-list';
import Footer from './components/Footer/footer';
import '../src/index.css';

const App = () => {
    const taskData = [
        {label: 'Completed task', classNameLi: 'editing', id: 1},
        {label: 'Edition task', classNameLi: 'editing', id: 2},
        {label: 'Active task', id: 3},
    ]

    return (
        <section className='todoapp'>
            <header className='header'>
                <h1>todos</h1>
                <NewTaskForm />
            </header>
            <section className='main'>
                <TaskList todos={taskData}/> 
                <Footer />    
            </section>
        </section>   
    )
};

ReactDom.render(<App />, document.getElementById('root'));
import React from 'react';
import ReactDom from 'react-dom';
import NewTaskForm from './components/NewTaskForm/new-task-form';
import TaskList from './components/TaskList/task-list';
import Footer from './components/Footer/footer';
import '../src/index.css';

const App = () => {
    const taskData = [
        {label: 'Completed task', classNameLi: 'completed', id: 1},
        {label: 'Edition task', classNameLi: 'editing', id: 2},
        {label: 'Active task', id: 3},
    ]

    const footerData = [
        {label: 'All', className: 'selected', id: 4},
        {label: 'Active', id: 5},
        {label: 'Complite', id: 6},
        {label: 'Clear completed', className: 'clear-completed', id: 7},
    ]

    return (
        <section className='todoapp'>
            <header className='header'>
                <h1>todos</h1>
                <NewTaskForm />
            </header>
            <section className='main'>
                <TaskList todos={taskData}/> 
                <Footer  todos={footerData}/>    
            </section>
        </section>   
    )
};

ReactDom.render(<App />, document.getElementById('root'));
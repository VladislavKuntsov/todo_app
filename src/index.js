import React, {Component} from 'react';
import ReactDom from 'react-dom';
import NewTaskForm from './components/NewTaskForm/new-task-form';
import TaskList from './components/TaskList/task-list';
import Footer from './components/Footer/footer';
import '../src/index.css';

export default class App extends Component {
    
    maxId = 100;

    state = {
        taskData: [
            this.createTask('Morning exercises '),
            this.createTask('To Drink coffee'),
            this.createTask('Make the bed '),
            this.createTask('Meet a friend '),
        ],
        term: '',
        filter: 'all',
    }
    
    createTask(label) {
        return {
            label,
            classNameLi: '',
            done: false, //состояние выполнения задачи
            id: this.maxId++,
            сreationTime:  new Date(),
        } 
    }

    deleteItem = (id) => {
        this.setState(( {taskData} ) => {

            const idx = taskData.findIndex((el)=> el.id === id)
            const newArray = [...taskData.slice(0, idx), ...taskData.slice(idx + 1)]

            return {
                taskData: newArray
            }
        }) 
    }   

    onNotDoneItem = (id) => {
        this.setState(({taskData}) => {
            const idx = taskData.findIndex((el)=> el.id === id)
            const oldTask = taskData[idx]
            
            const newTask = {...oldTask,
            done: !oldTask.done}

             if(newTask.done) {
                newTask.classNameLi = "completed";
            } else newTask.classNameLi = ""

            const newArray = [...taskData.slice(0, idx), newTask, ...taskData.slice(idx + 1)]

            return {
                taskData: newArray
            }
        })
    }

    clearCompleted = () => {

        this.setState(({taskData}) => {
            const newArray = taskData.filter((element) => !element.done); 

            return {
                taskData: newArray
            }
        })  
    } 

    search(items, term) {
        if (term.length === 0) return items;
           
            return items.filter((item) => {
                return item.label
                    .toLowerCase()
                    .indexOf(term.toLowerCase()) > -1;
            })  
    }

    filter (items, filter) { //незавершенные задачи
        switch(filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter((item) => !item.done);
            case 'completed':
                return items.filter((item) => item.done);
            default:
                return items;
        }
    }

    onFilterChange = (filter) => {
        this.setState({filter})
    }

    onTaskAdd = (text) => {
        const newTask = this.createTask(text);

        this.setState(({taskData}) => {
            const newArray = [...taskData, newTask]

            return {
                taskData: newArray
            } 
        })
    }

    render () {
        const doneCount = this.state.taskData.filter((el) => !el.done).length;  //счетчик незавершенных задач

        const {taskData, term, filter} = this.state;

        const visibleItems = this.filter(this.search(taskData, term), filter);

        return (
            <section className='todoapp'>
                <header className='header'>
                    <h1>todos</h1>
                    <NewTaskForm 
                    onTaskAdd={this.onTaskAdd}
                    />
                </header>
                <section className='main'>
                    <TaskList 
                    todos = { visibleItems }
                    onDeleted = { this.deleteItem }
                    onNotDone = { this.onNotDoneItem }
                    /> 
                    <Footer 
                    doneCount= {doneCount}
                    clearCompleted = {this.clearCompleted}
                    filter = {this.state.filter}           /////////////
                    onFilterChange = {this.onFilterChange}    ///////////////
                    />    
                </section>
            </section>   
        )
    }
}

ReactDom.render(<App />, document.getElementById('root'));
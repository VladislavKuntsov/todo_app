import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import NewTaskForm from '../NewTaskForm/new-task-form';
import TaskList from '../TaskList/task-list';
import Footer from '../Footer/footer';
import './app.css';

function App() {
  function createTask(label, timeSec) {
    return {
      label,
      classNameLi: '',
      done: false,
      id: uuidv4(),
      сreationTime: new Date(),
      timeSec,
      pastTime: ' 1 minute ago',
    };
  }

  const [taskData, setTaskData] = useState([
    createTask('Morning exercises', 1200),
    createTask('To Drink coffee', 1200),
    createTask('Make the bed', 1200),
    createTask('Meet a friend', 1200),
  ]);
  const [filter, setFilter] = useState('all');
  const term = '';

  useEffect(() => setTaskData(taskData), [taskData]);

  const setTime = (time, id, pastTime) => {
    const newArr = taskData.map((item) => {
      if (item.id === id) {
        const newObj = item;
        newObj.timeSec = time;
        newObj.pastTime = pastTime;

        return newObj;
      }
      return item;
    });

    setTaskData(newArr);
  };

  const onTaskAdd = (text, min, sec) => {
    const timeSec = 60 * min + sec;

    const newTask = createTask(text, timeSec);

    setTaskData([...taskData, newTask]);
  };

  const onFilterChange = (filterCurrent) => {
    setFilter(filterCurrent);
  };

  const clearCompleted = () => {
    const newArray = taskData.filter((element) => !element.done);

    setTaskData(newArray);
  };

  const onNotDoneItem = (id) => {
    const idx = taskData.findIndex((el) => el.id === id);
    const oldTask = taskData[idx];
    const newTask = {
      ...oldTask,
      done: !oldTask.done,
    };

    if (newTask.done) {
      newTask.classNameLi = 'completed';
    } else newTask.classNameLi = '';

    const newArray = [...taskData.slice(0, idx), newTask, ...taskData.slice(idx + 1)];

    setTaskData(newArray);
  };

  const deleteItem = (id) => {
    const idx = taskData.findIndex((el) => el.id === id);
    const newArray = [...taskData.slice(0, idx), ...taskData.slice(idx + 1)];

    setTaskData(newArray);
  };

  const search = (items, termCurrent) => {
    if (termCurrent.length === 0) return items;

    return items.filter((item) => item.label.toLowerCase().indexOf(termCurrent.toLowerCase()) > -1);
  };

  const filterTask = (items, filterSelected) => {
    switch (filterSelected) {
      case 'all':
        return items;
      case 'active':
        return items.filter((item) => !item.done);
      case 'completed':
        return items.filter((item) => item.done);
      default:
        return items;
    }
  };

  const doneCount = taskData.filter((item) => !item.done).length;
  const visibleItems = filterTask(search(taskData, term), filter);

  return (
    <section className="todoapp">
      <header className="header">
        <h1>Notes</h1>
        <NewTaskForm onTaskAdd={onTaskAdd} />
      </header>
      <section className="main">
        <TaskList
          todos={visibleItems}
          taskData={taskData}
          onDeleted={deleteItem}
          onNotDone={onNotDoneItem}
          setTime={setTime}
        />
        <Footer doneCount={doneCount} clearCompleted={clearCompleted} filter={filter} onFilterChange={onFilterChange} />
      </section>
    </section>
  );
}

export default App;

import { useState } from 'react';
import { nanoid } from 'nanoid';
import FilterButton from './components/FilterButton';
import Form from './components/Form';
import Todo from './components/Todo';
import './index.css';
import TasksText from './components/TasksText';

const FILTER_MAP = {
  All: () => true,
  Active: task => !task.completed,
  Completed: task => task.completed,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App({ tasksData }) {
  const [tasks, setTasks] = useState(tasksData);

  const [filter, setFilter] = useState('All');

  const tasksNoun = tasks.length !== 1 ? 'tasks' : 'task';

  const addTask = name => {
    // const newTask = { id: 'id', name: name, completed: false };
    // setTasks([...tasks, newTask]);

    return setTasks([
      ...tasks,
      { id: 'todo-' + nanoid(), name, completed: false },
    ]);
  };

  const toggleTaskCompleted = id => {
    const updatedTasks = tasks.map(task => {
      if (id === task.id) {
        return {
          ...task,
          completed: !task.completed,
        };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  const deleteTask = id => {
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
  };

  const editTask = (id, newName) => {
    const editedTaskList = tasks.map(task => {
      if (id === task.id) {
        //
        return { ...task, name: newName };
      }
      return task;
    });
    setTasks(editedTaskList);
  };

  return (
    <div className='todoapp stack-large'>
      <h1>TodoMatic</h1>
      <Form addTask={addTask} />

      <div className='filters btn-group stack-exception'>
        {/* <FilterButton />
        <FilterButton />
        <FilterButton /> */}
        {FILTER_NAMES.map(name => (
          <FilterButton
            key={name}
            name={name}
            isPressed={name === filter}
            setFilter={setFilter}
          />
        ))}
      </div>
      {/* <h2 id='list-heading'>
        {tasks.length} {tasksNoun} remaining
      </h2> */}

      <TasksText tasks={tasks} />
      <ul
        role='list'
        className='todo-list stack-large stack-exception'
        aria-labelledby='list-heading'
      >
        {/* {tasks.map(task => (
          <Todo
            key={task.id}
            name={task.name}
            completed={task.completed}
            toggleTaskCompleted={toggleTaskCompleted}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        ))} */}

        {tasks.filter(FILTER_MAP[filter]).map(task => (
          <Todo
            id={task.id}
            name={task.name}
            completed={task.completed}
            key={task.id}
            toggleTaskCompleted={toggleTaskCompleted}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;

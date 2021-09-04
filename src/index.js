import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { nanoid } from 'nanoid';

const DATA = [
  { id: 'todo-' + nanoid(), name: 'Eat', completed: true },
  { id: 'todo-' + nanoid(), name: 'Sleep', completed: false },
  { id: 'todo-' + nanoid(), name: 'Repeat', completed: false },
];

ReactDOM.render(
  <React.StrictMode>
    <App tasksData={DATA} />
  </React.StrictMode>,
  document.getElementById('root')
);

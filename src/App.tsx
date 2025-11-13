import React from 'react';
import TodoList from './Todolist';
import Clock from './Timer';
import './App.css';

function App() {
  return (
    <div className='container'>
      <TodoList></TodoList>
      <Clock></Clock>
    </div>
  );
}

export default App;

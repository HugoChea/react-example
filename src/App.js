import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Liste de tâches</h1>
        <TodoForm />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;

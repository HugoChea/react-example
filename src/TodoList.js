import React, { useContext } from 'react';
import { TodoContext } from './TodoContext';

function TodoList() {
  const { todos, removeTodo } = useContext(TodoContext);

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          {todo}
          <button onClick={() => removeTodo(index)}>Supprimer</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;

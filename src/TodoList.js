import React from 'react';
import TodoItem from './TodoItem';

function TodoList({...props }) {
  return (
    <ul>
      {props.todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} index={index} removeTodo={props.removeTodo} />
      ))}
    </ul>
  );
}

export default TodoList;

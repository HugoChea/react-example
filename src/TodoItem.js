import React from 'react';

function TodoItem({ todo, index, removeTodo }) {
  const handleRemoveClick = () => {
    removeTodo(index);
  };

  return (
    <li>
      {todo}
      <button onClick={handleRemoveClick}>Supprimer</button>
    </li>
  );
}

export default TodoItem;

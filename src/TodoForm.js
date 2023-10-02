import React, { useState, useContext } from 'react';
import { TodoContext } from './TodoContext';

function TodoForm() {
  const [inputText, setInputText] = useState('');
  const { addTodo } = useContext(TodoContext);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim() !== '') {
      addTodo(inputText);
      setInputText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ajouter une tâche..."
        value={inputText}
        onChange={handleInputChange}
      />
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default TodoForm;

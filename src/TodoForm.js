import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './store/todosSlice';

function TodoForm() {
  const [inputText, setInputText] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim() !== '') {
      dispatch(addTodo(inputText));
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

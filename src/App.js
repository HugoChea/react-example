import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { TodoProvider } from './TodoContext';
import './App.css';

function App() {
  return (
    <TodoProvider>
      <div>
        <h1>Liste de tâches</h1>
        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;

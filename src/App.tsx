import { TodoList } from '@todo/components';
import { TodoListProvider } from '@todo/store';
import './App.css';

function App() {
  return (
    <>
      <TodoListProvider>
        <TodoList />
      </TodoListProvider>
    </>
  );
}

export default App;

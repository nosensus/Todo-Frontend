import './App.css';
import { TodoList } from '@todo/components';
import { TodoListProvider } from '@todo/store';

function App() {
  return (
    <>
      <h1>Hello world</h1>
      <TodoListProvider>
        <TodoList />
      </TodoListProvider>
    </>
  );
}

export default App;

import { TodoList } from '@todo/components';
import { TodoListProvider } from '@todo/store';
import './App.css';

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

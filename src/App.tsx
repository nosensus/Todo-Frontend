import { TodoListWrapper } from '@todo/components';
import { TodoListProvider } from '@todo/store';
import './App.css';

function App() {
  return (
    <>
      <TodoListProvider>
        <TodoListWrapper />
      </TodoListProvider>
    </>
  );
}

export default App;

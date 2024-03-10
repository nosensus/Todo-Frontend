import { ITodoItemCard } from "../components/todo-item-card";
const apiUrl = import.meta.env.VITE_APP_API_URL || "https://aufgabenliste.azurewebsites.net/api/todo";

const getTodoList = async () => {
  return await fetch(`${apiUrl}`);
}

const createTodoItem = async (newTodoItem: ITodoItemCard) => {
  await fetch(`${apiUrl}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newTodoItem)
  });
}

const editTodoItem = async (editTodoItem: ITodoItemCard) => {
  await fetch(`${apiUrl}${editTodoItem.id}?id=${editTodoItem.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(editTodoItem)
  });
}

const deleteTodoItem = async (id: string) => {
  await fetch(`${apiUrl}${id}`, {
    method: 'DELETE'
  });
}

export { getTodoList, createTodoItem, editTodoItem, deleteTodoItem }

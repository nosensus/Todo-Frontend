import { ITodoItemCard } from "../components/todo-item-card";

const getTodoList = async () => {
  return await fetch("https://aufgabenliste.azurewebsites.net/api/todo")
}

const createTodoItem = async (newTodoItem: ITodoItemCard) => {
  await fetch("https://aufgabenliste.azurewebsites.net/api/todo", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newTodoItem)
  });
}

const editTodoItem = async (editTodoItem: ITodoItemCard) => {
  await fetch(`https://aufgabenliste.azurewebsites.net/api/todo/${editTodoItem.id}?id=${editTodoItem.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(editTodoItem)
  });
}

const deleteTodoItem = async (id: string) => {
  await fetch(`https://aufgabenliste.azurewebsites.net/api/todo/${id}`, {
    method: 'DELETE'
  });
}

export { getTodoList, createTodoItem, editTodoItem, deleteTodoItem }

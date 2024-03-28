import { API_URL } from "@todo/consts";
import { TodoItem } from "@todo/store";

const getTodoList = async () => {
  return await fetch(`${API_URL}/items`);
}

const postTodoListItem = async (newItem: TodoItem) => {
  await fetch(`${API_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newItem)
  });
}

export { getTodoList, postTodoListItem }

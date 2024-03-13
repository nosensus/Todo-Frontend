import { API_URL } from "@todo/consts";

const getTodoList = async () => {
  return await fetch(`${API_URL}/items`);
}

export { getTodoList }

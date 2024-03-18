import { http, HttpResponse } from 'msw'
import { fakeDb } from '@todo/utils';
import { API_URL } from '@todo/consts';

const handlers = [
  http.get(`${API_URL}/items`, async () => {
    return HttpResponse.json(fakeDb.todoList);
  }),
]

export { handlers }

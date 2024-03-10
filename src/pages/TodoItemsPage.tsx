import { useEffect } from "react";
import { Loader } from "../components/loader";
import { TodoItemCard } from "../components/todo-item-card";
import { useTodoList } from "../hooks";

const TodoItemsPage = () => {
  const {
    queryProps: { isLoading, todoList },
    queryTodoList,
  } = useTodoList();

  useEffect(() => {
    queryTodoList();
  }, []);

  return (
    <>
      <section className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4">All Task</h1>

        {isLoading && <Loader />}

        {
          <div className="grid grid-cols-4 gap-4">
            {todoList?.map((item) => (
              <TodoItemCard
                isImportant={item.isImportant}
                key={item.id}
                todoItemCard={item}
              />
            ))}
          </div>
        }
      </section>
    </>
  );
};

export { TodoItemsPage };

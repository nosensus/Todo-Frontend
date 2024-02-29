import { Loader } from "../components/loader";
import { TodoItemCard } from "../components/todo-item-card";
import { useTodoList } from "../hooks";

const TodoItemsCompletePage = () => {
  const {
    todoList,
    query: { isLoading },
  } = useTodoList();

  return (
    <>
      <section className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4">Task Completed</h1>

        {isLoading && <Loader />}

        {
          <div className="grid grid-cols-4 gap-4">
            {todoList
              ?.filter((c) => c.isCompleted == true)
              .map((card) => (
                <TodoItemCard
                  isImportant={card.isImportant}
                  key={card.id}
                  todoItemCard={card}
                  onCardComplete={() => undefined}
                  onCardDelete={() => undefined}
                  onCardEdit={() => undefined}
                />
              ))}
          </div>
        }
      </section>
    </>
  );
};

export { TodoItemsCompletePage };

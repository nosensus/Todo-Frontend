import { TodoItemCard } from "../components/todo-item-card";
import { useTodoCards } from "../hooks";

const TodoItemsPage = () => {
  const { todoCards } = useTodoCards();
  return (
    <>
      <section className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4">All Task</h1>

        {
          <div className="grid grid-cols-4 gap-4">
            {todoCards.map((card) => (
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

export { TodoItemsPage };

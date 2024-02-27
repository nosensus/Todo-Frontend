import { TodoItemCard } from "../components/todo-item-card";
import { useTodoList } from "../hooks";

const TodoItemsPage = () => {
  // const {
  //   query: { list },
  // } = useTodoList();
  // return (
  //   <>
  //     <section className="container mx-auto">
  //       <h1 className="text-3xl font-bold mb-4">All Task</h1>
  //       {
  //         <div className="grid grid-cols-4 gap-4">
  //           {list?.map((item) => (
  //             <TodoItemCard
  //               isImportant={item.isImportant}
  //               key={item.id}
  //               todoItemCard={item}
  //               onCardComplete={() => undefined}
  //               onCardDelete={() => undefined}
  //               onCardEdit={() => undefined}
  //             />
  //           ))}
  //         </div>
  //       }
  //     </section>
  //   </>
  // );
};

export { TodoItemsPage };

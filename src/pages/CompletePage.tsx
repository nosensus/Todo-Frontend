import { useCards } from "../hooks";
import { Card } from "../components/Card";

const CompletePage = () => {
  const { cards } = useCards();

  return (
    <>
      <section className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4">Task Completed</h1>

        {
          <div className="grid grid-cols-4 gap-4">
            {cards
              .filter((c) => c.isCompleted == true)
              .map((card) => (
                <Card
                  isImportant={card.isImportant}
                  key={card.id}
                  card={card}
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

export { CompletePage };

import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { useCards } from "./hooks";
import { Loader } from "./components/Loader";
import { ErrorMessage } from "./components/ErrorMessage";

function App() {
  const { cards, loading, error } = useCards();
  return (
    <>
      <Header />
      <section className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>

        {loading && <Loader />}
        {error && <ErrorMessage error={error} />}
        {
          <div className="grid grid-cols-4 gap-4">
            {cards.map((card) => (
              <Card key={card.id} card={card} />
            ))}
          </div>
        }
      </section>
    </>
  );
}

export default App;

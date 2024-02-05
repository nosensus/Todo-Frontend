import { Button } from "../Button";

function Header() {
  return (
    <header className="py-4 px-4 bg-gray-100 w-100 mb-4">
      <div className="container mx-auto flex justify-between">
        <a href="#">Logo</a>
        <Button onClick={() => {}}>New Todo</Button>
      </div>
    </header>
  );
}

export { Header };
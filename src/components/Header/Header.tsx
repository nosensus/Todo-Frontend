import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-4 px-4 bg-gray-100 w-100 mb-4">
      <div className="container mx-auto flex justify-between">
        <a href="#">Logo</a>
        <nav className="flex">
          <Link className="mr-3 text-blue-600" to="/">
            Active
          </Link>
          <Link className="mr-3" to="/all">
            All
          </Link>
          <Link className="mr-0" to="/complete">
            Completed
          </Link>
        </nav>
      </div>
    </header>
  );
};

export { Header };

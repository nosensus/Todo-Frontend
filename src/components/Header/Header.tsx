const Header = () => {
  return (
    <header className="py-4 px-4 bg-gray-100 w-100 mb-4">
      <div className="container mx-auto flex justify-between">
        <a href="#">Logo</a>
        <div className="flex">
          <a href="#!" className="mr-3 text-blue-600">
            Active
          </a>
          <a href="#!" className="mr-3">
            All
          </a>
          <a href="#!">Completed</a>
        </div>
      </div>
    </header>
  );
};

export { Header };

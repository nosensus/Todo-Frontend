const Loader = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-100 h-100 bg-black opacity-60 z-40"></div>
      <p
        className="absolute top-1/2 left-1/2 z-50 text-3xl"
        style={{ color: "red" }}
      >
        Loading ...
      </p>
    </>
  );
};

export { Loader };

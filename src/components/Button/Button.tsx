const Button = ({ children, onClick }: any) => {
  return (
    <button className="btn btn-primary mb-3" onClick={onClick}>
      {children}
    </button>
  );
};

export { Button };

const ErrorMessage = ({ message }: { message: string }) => {
  return (
    <p className="absolute top-10 left-1/2" style={{ color: "#dc3545" }}>
      {message}
    </p>
  );
};

export { ErrorMessage };

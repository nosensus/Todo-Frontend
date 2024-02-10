interface IErrorMessage {
  error: string;
}

const ErrorMessage = ({ error }: IErrorMessage) => {
  return (
    <p className="absolute top-10 left-1/2" style={{ color: "#dc3545" }}>
      {error}
    </p>
  );
};

export { ErrorMessage };

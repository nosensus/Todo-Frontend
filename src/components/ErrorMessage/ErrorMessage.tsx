interface IErrorMessage {
  error: string;
}

const ErrorMessage = ({ error }: IErrorMessage) => {
  return <p className="to-red-500">{error}</p>;
};

export { ErrorMessage };

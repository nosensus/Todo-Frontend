interface IErrorMessage {
  error: string;
}

function ErrorMessage({ error }: IErrorMessage) {
  return <p className="to-red-500">{error}</p>;
}

export { ErrorMessage };

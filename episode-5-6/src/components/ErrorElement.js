import { useRouteError } from "react-router-dom";

const ErrorElement = () => {
  const err = useRouteError();
  return (
    <div className="error-page">
      <h1>Something went Wrong</h1>
      <h2>
        {err.status} : {err.statusText}
      </h2>
    </div>
  );
};

export default ErrorElement;

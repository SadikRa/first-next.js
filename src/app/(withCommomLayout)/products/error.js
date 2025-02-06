"use client";

const ErrorPage = ({ error, reset }) => {
  return (
    <div>
      <h1 className="text-center text-red-600 text-xl">
        {" "}
        something went wrong
        {error.massage}
      </h1>
    </div>
  );
};

export default ErrorPage;

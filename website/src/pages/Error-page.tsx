import { useRouteError } from "react-router-dom";
import { Header } from "../header/Header";

export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      class="flex text-center items-center min-h-screen bg-gray-100"
    >
      <Header />
      <div class="container mx-auto">
        <h1 class="mb-8">Oops!</h1>
        <p class="mb-8">Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
};

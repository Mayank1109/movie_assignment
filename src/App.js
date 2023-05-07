import HomePage from "./Pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MovieDetail from "./Pages/MovieDetail";
import ErrorPageC from "./Pages/ErrorPageC";

const router = createBrowserRouter([
  { path: "/", element: <HomePage />, errorElement: <ErrorPageC /> },
  {
    path: "/moviedesc",
    element: <MovieDetail />,
    errorElement: <ErrorPageC />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

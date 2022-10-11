import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog/Blog";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Home from "./components/Home/Home";
import Main from "./components/Main/Main";
import Quizs from "./components/Quizs/Quizs";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/",
          element: <Home />,
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
        },
        {
          path: "/home",
          element: <Home />,
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
        },
        {
          path: "home/quizs/:id",
          loader: async ({ params }) => {
            // console.log(params.quisid);
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.id}`
            );
          },
          element: <Quizs />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

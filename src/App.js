import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog/Blog";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Home from "./components/Home/Home";
import Main from "./components/Main/Main";
import QuestioRechart from "./components/QuetionRechart/QuestioRechart";
import Quizs from "./components/Quizs/Quizs";
import { ToastContainer, toast } from 'react-toastify';

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
          path: "/topics",
          element: <Home />,
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
        },
        {
          path: "/quizs/:id",
          loader: async ({ params }) => {
            
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.id}`
            );
          },
          element: <Quizs />,
        },
        {
          path: '/statistic',
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <QuestioRechart/>,
        },
        {
          path: "/topics/quizs/:id",
          loader: async ({ params }) => {
            
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

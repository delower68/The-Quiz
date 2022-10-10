import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Main from './components/Main/Main';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main/>,
      errorElement: <ErrorPage/> ,
      children:[
        {
          path:'/blog',
          element: <Blog/>
        },
        {
          path: '/home',
          element: <Home/>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;

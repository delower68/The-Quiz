import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Main from './components/Main/Main';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main/>,
      errorElement: <ErrorPage/> ,
      children:[
        {

        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;

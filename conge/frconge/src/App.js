import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//importer les components 
import Register from './Pages/Register';
import Login from './Pages/login';
import Home from './Pages/homepage';

function App() {
  const router = createBrowserRouter([
    //page d'acceuil
    {
      path: '/',
      element: <div> Home Page </div>,
    },
    //page de connexion
    {
      path: '/signin',
      element: <Login />,
    },
    {
      path: '/home',
      element: <Home />,
    },
    //page signup
    {
      path: '/signup',
      element: <Register />,//on fait appel au component specifique apres avoir l'importer 
    },
  ]);

  return (<>
    <RouterProvider router={router} />
  </>
  );


}
export default App;

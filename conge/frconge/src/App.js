import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import router from './Config/routes' 

function App() {
  

  return (<>
    <RouterProvider router={router} />
  </>
  );


}
export default App;

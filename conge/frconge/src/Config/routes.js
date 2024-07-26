import { createBrowserRouter } from 'react-router-dom'
//importer les components 
import Register from '../Pages/Register';
import Login from '../Pages/login';
import Home from '../Pages/homepage';
import Nfound from '../Pages/notfound';
import CreerConge from '../Pages/creerconge';
import Acceuil from '../Pages/acceuil';
import { Profile } from '../Pages/profile-info';
import HistoriqueConge from '../Pages/historique';
import CongeCalendar from '../Pages/calendar';


const router = createBrowserRouter([
    //page d'acceuil
    {
        path: '/',
        element: <Acceuil/> ,
        errorElement:<Nfound/>
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
    //page creation d'un conge 
    {
        path: '/creeconge',
        element: <CreerConge />,//on fait appel au component specifique apres avoir l'importer 
    },
    //page de connexion
    {
        path: '/profil',
        element: <Profile/>,
    }, {
        path: '/historique',
        element: <HistoriqueConge />,
    },
    {
        path: '/calendar',
        element: <CongeCalendar />,
    },
   
    
]);
export default router;
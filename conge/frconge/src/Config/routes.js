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
import HomeRh from '../Pages/interface-rh/homerh';
import Verif from '../Pages/interface-rh/valider-rejeter';
import Attente from '../Pages/interface-rh/enattente';
import Securite from '../Pages/securite';
import Solde from '../Pages/solde';


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
    {
        path: '/homerh',
        element: <HomeRh />,
    },
    {
        path: '/verif',
        element: <Verif />,
    },
    {
        path: '/attente',
        element: <Attente />,
    },
    {
        path: '/securite',
        element: <Securite />,
    },
    {
        path: '/solde',
        element: <Solde/>,
    },

    
]);
export default router;
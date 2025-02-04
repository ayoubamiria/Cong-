import React, { useState ,useEffect } from "react";
import "./page-css/creeconge.css"
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from 'react-router-dom'; // For navigation after login

const CreerConge = () => {
    const [errors, setErrors] = useState({});//pour stocker dedans les err

    const navigate = useNavigate();

    const [nom, setNom] = useState('');
    const [email, setEmail] = useState('');
    const [dateDebut, setDateDebut] = useState('');
    const [dateFin, setDateFin] = useState('');
    const [typeConge, setTypeConge] = useState('maladie'); // Valeur par défaut
    const [raison, setRaison] = useState(null);
    const [document, setDocument] = useState(null);
    const [status, setStatus] = useState('en attente');


//validation des donnees 
    const validateForm = () => {
        const newErrors = {};
        if (!nom.trim()) newErrors.nom = "Le nom est requis";
        if (!email.trim()) newErrors.email = "L'email est requis";
        else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "L'email est invalide";
        if (!dateDebut) newErrors.dateDebut = "La date de début est requise";
        if (!dateFin) newErrors.dateFin = "La date de fin est requise";
        else if (dateFin < dateDebut) newErrors.dateFin = "La date de fin doit être après la date de début";
        if (!typeConge) newErrors.typeConge = "Le type de congé est requis";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!validateForm()) {
            return;
        }

        const userData = localStorage.getItem("user_data");
        const userDataParsed = JSON.parse(userData);
        const userId = userDataParsed._id; // Assurez-vous que vous récupérez l'ID utilisateur correctement

        if (!userId) {
            toast.error('User ID is missing. Please log in again.');
            return;
        }
       // const userId = '66a100f83932b021c7b5f48d'; // Remplacer par l'ID utilisateur !!!!!!!!!!!!!!!!!!!!!
        const formData = {
            user: userId,
            startDate: dateDebut,
            endDate: dateFin,
            type: typeConge,
            status: 'en attente',
            reason: raison,
        };
        // Ici, vous pouvez ajouter la logique pour envoyer les données du formulaire à un serveur
        try {
            const response = await axios.post('http://localhost:3000/demande-conge/creeconge', formData);
            console.log('Demande de congé envoyée avec succès', response.data);
            toast.success('Conge Creé successfully!');
            //directement ???!!!!!!!!!!!!!!!!!!!!!
            navigate('/home');
        } catch (error) {
           
            console.error('Erreur lors de l\'envoi de la demande de congé', error);
        }
    

        console.log({ nom, email, dateDebut, dateFin, typeConge, document, raison });
    };

    return ( <div><div className="navbar"><header className="header" >
                <div className="header-left">
<Toaster/>
                    <span className="nav-item"><a style={{ fontFamily: 'Aclonica, sans-serif' }} href='/home'>ACCEUIL</a></span>
                    <span className="nav-item2"><a style={{ fontFamily: 'Aclonica, sans-serif' }} href="/profil">PROFIL</a></span>
                    
                </div>
                <div className="header-right">

                    <button className="logout-button" onClick={() => navigate("/")}>SE DECONNECTER</button>
                </div>
    </header></div>
        <div className="creer"><b>Creer Votre Congé</b></div>

        <div className="form-container">
          
            <div className="remplir" ><h2 style={{ fontFamily: 'Aclonica, sans-serif' }}>Veuillez remplir ce formulaire</h2></div>
            <form onSubmit={handleSubmit}>
                <div className="form-group1">
                    <label htmlFor="nom">Nom & Prenom : *</label>
                    <input className="input12"type="text" id="nom" placeholder="Entrer votre nom et prenom..." value={nom} onChange={(e) => setNom(e.target.value)} />
                    {errors.nom && <span className="error">{errors.nom}</span>}
                </div>

                <div className="form-group1">
                    <label htmlFor="email">Email: *</label>
                    <input className="input12" type="email" id="email" placeholder="Entrer Email disponible..." value={email} onChange={(e) => setEmail(e.target.value)} />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>

                <div className="form-group1">
                    <label htmlFor="startdate">Date debut: *</label>
                    <input className="input12" type="date" id="startdate" value={dateDebut} onChange={(e) => setDateDebut(e.target.value)} />
                    {errors.dateDebut && <span className="error">{errors.dateDebut}</span>}
                </div>

                <div className="form-group1">
                    <label htmlFor="enddate">Date fin: *</label>
                    <input className="input12" type="date" id="enddate" value={dateFin} onChange={(e) => setDateFin(e.target.value)} />
                    {errors.dateFin && <span className="error">{errors.dateFin}</span>}
                </div>

                <div className="form-group1">
                    <label htmlFor="typeConge">Selectionner Le Type de congé: *</label>
                    <select className="input12"  id="typeConge" value={typeConge} onChange={(e) => setTypeConge(e.target.value)}>
                        <option value="maladie">Maladie</option>
                        <option value="vacance">Vacances</option>
                        <option value="personnel">Personnel</option>
                        <option value="other">Autre</option>
                    </select>
                    {errors.typeConge && <span className="error">{errors.typeConge}</span>}
                </div>

                <div className="form-group1">
                    <label htmlFor="raison">Raison:</label>
                    <textarea className="input12"  id="raison" placeholder="Expliquer brievement le besoin de congé..." value={raison} onChange={(e) => setRaison(e.target.value)} />
                </div>

                <div className="form-group1">
                    <label htmlFor="document">Importer Document utile:</label>
                    <input type="file" id="document"  className="filebt" onChange={(e) => setDocument(e.target.files[0])} />
                </div>

                <input className="breset" type='reset' value="Annuler" />
                <button className="subbt" type="submit">Envoyer</button>
            </form>
        </div>
</div> 
    );

}
export default CreerConge;
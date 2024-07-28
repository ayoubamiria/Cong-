import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'C:/Users/User/Desktop/Conges/Congy/conge/frconge/src/Pages/page-css/historique.css'
import { differenceInDays } from 'date-fns';
import NavbarH from '../components/navbar/navbarh';


const Attente = () => {
    const handleEdit = async (id) => {
        try {
            await axios.put(`http://localhost:3000/demande-conge/rejeter/${id}`);
            // Update the state to reflect the change
            setConges((prevConges) =>
                prevConges.map((conge) =>
                    conge._id === id ? { ...conge, status: 'rejete' } : conge
                )
            );
        } catch (error) {
            console.error('Error rejecting leave request:', error);
        }
    }
    const handleAccept = async (id) => {
        if (!id) {
            console.error('Invalid leave request ID');
            return;
        }

        console.log(`Approving leave request with ID: ${id}`);

        try {
            const response = await axios.put(`http://localhost:3000/demande-conge/approve/${id}`);

            if (response.status === 200) {
                console.log('Leave request approved successfully:', response.data);

                // Update the state to reflect the change
                setConges((prevConges) =>
                    prevConges.map((conge) =>
                        conge._id === id ? { ...conge, status: 'approuvé' } : conge
                    )
                );
            } else {
                console.error('Unexpected response status:', response.status);
            }
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.error('Error approving leave request:', error.response.data);
            } else if (error.request) {
                // The request was made but no response was received
                console.error('No response received:', error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error('Error setting up request:', error.message);
            }
        } finally {
            console.log('Approval process completed for leave request ID:', id);
        }
    };
    const [conges, setConges] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchConges = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/demande-conge/attente`);
                setConges(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchConges();
    });

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <NavbarH/>
            <div className='Historique'> <h2>Historique des Congés</h2></div>
            <div className='aaa'>
                <p><a href="/attente" className="hrefen-attente">Congé(s) en attente(s)</a>
                </p>
                <a href="/verif" className="hrefen-attente23">Tous les congés </a>
            </div>
            {conges.length === 0 ? (
              <div className='aucun'>  <p>Aucun congé trouvé.</p></div>
            ) : (
                <table>
                    <thead>
                            <tr>
                                <th>ID</th>

                            <th>Type</th>
                            <th>Status</th>
                            <th>Raison</th>
                            <th>Nombre des jour(s)</th>
                            <th>Date debut</th>
                                <th>Date fin</th>
                                <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {conges.map((conge) => (
                            <tr key={conge._id}>
                                <td>{conge._id}</td>
                                <td>{conge.type}</td>
                                <td>
                                    <span className={`status ${conge.status.toLowerCase()}`}>
                                        {conge.status}
                                    </span>
                                </td>
                                <td>{conge.reason}</td>
                                <td>
                                    {differenceInDays(new Date(conge.endDate), new Date(conge.startDate))}
                                </td>

                                <td>  {new Date(conge.startDate).toLocaleDateString()}</td>
                                <td>  {new Date(conge.endDate).toLocaleDateString()}</td>
                                <td>
                                    <button className="btn btn-primary" onClick={() => handleEdit(conge._id)}>rejeter
                                    </button><button className="btn btn-primary" onClick={() => handleAccept(conge._id)}>approuver
                                    </button>
                                    
                                </td>


                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};


export default Attente;
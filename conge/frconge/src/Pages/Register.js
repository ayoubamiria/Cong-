import React, { useState } from 'react';
import UserService from '../Services/UserService';

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [role, setRole] = useState('employe');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [birthdate, setBirthDate] = useState('');
    const [picture, setPicture] = useState('');


    const Signup = async (event) => {
        event.preventDefault(); // Éliminer le refresh

        const data = {
            firstName,
            lastName,
            email,
            password,
            birthdate,
            role,
        };

        try {
            const response = await UserService.Signup(data);
            console.log('Signup successful:', response);
        } catch (error) {
            console.error('Signup error:', error);
        }
    };

    /* const Signup = async (event) => {
        event.preventDefault();//eliminer le refresh
    const data = {
            firstName,
            lastName,
            email,
            password,
            birthdate,
            //picture,
            role,
        };

        try {
            const response = await UserService.Signup(data);
            console.log('Signup successful:', response);
        } catch (error) {
            console.error('Signup error:', error);
        }
    }; */

    return (
        <div className='register-content'>
            <div>
                <h1>FORMULAIRE D'INSCRIPTION</h1>
               <div className='ppp'><p>Creer votre Compte par ici</p></div> 
            </div>
            <div className='form'>



                <form onSubmit={Signup}>
                    <div className='form-group'>
                        <label> Firstname </label>
                        <input
                            className='input'
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder='Entrer votre prenom ...'
                        />
                    </div>
                    <div className='form-group'>
                        <label> Lastname </label>
                        <input
                            className='input'
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder='Entrer votre nom ... '

                        />
                    </div>
                    <div className='form-group'>
                        <label> Email </label>
                        <input
                            className='input'
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Entrer votre email...'

                        />
                    </div>
                    <div className='form-group'>
                        <label> Password </label>
                        <input
                            className='input'
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Entrer votre mot de passe ...'

                        />
                    </div>
                    <div className='form-radio'>
                        <div className='form-group'><label>Role</label></div>
                        <input
                            type="radio"
                            name="role"
                            value="employe"
                            checked={role === 'employe'}
                            onChange={() => setRole('employe')}
                        />
                        <span> Employe </span>
                        <input
                            type="radio"
                            name="role"
                            value="rh"
                            checked={role === 'rh'}
                            onChange={() => setRole('rh')}
                        />
                        <span> RH</span>
                    </div>
                    <div className='form-group'>
                        <label> Birthdate </label>
                        <input
                            className='input'
                            type="date"
                            value={birthdate}
                            onChange={(e) => setBirthDate(e.target.value)}
                            placeholder='Entrer votre date de naissance ...'

                        />
                    </div>
                    
                 {    <div className='form-group'>
                        <label> Photo </label>
                        <input
                            className='input'
                            type="file"
                            onChange={(e) => setPicture(e.target.files[0])}
                        />
                    </div> }
                    <input className='btreset' type='reset' value='Reset' />
                    <button className='btn signup' type='submit'>Sign Up</button>
                
                </form>
            </div>
        </div>
    );
}

export default Register;



/*import React, { useState } from 'react';
//import './StudentRegistrationForm.css';

const StudentRegistrationForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

   
    //la fonction qu'elle va executer lorsque je clique sur sub
    const handleSubmit = (event) => {
        event.preventDefault(); //eliminer le refresh
        // Handle form submission here
        console.log('Form submitted:', { //pour tester est ce que elle marche ou pas 
           
            firstName,
            lastName,
            confirpass,
            password,
            email,
            birthdate,
            picture,
            role
            
        });
    };

    return (
        <div className="container">
            <h2>STUDENT REGISTRATION FORM</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">First name:</label>
                    <input
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={(event) => setFirstName(event.target.value)}
                        placeholder="Your first name.."
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Last name:</label>
                    <input
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={(event) => setLastName(event.target.value)}
                        placeholder="Your last name.."
                    />
                </div>
                <div>
                    <label htmlFor="address">Address:</label>
                    <input
                        type="text"
                        id="address"
                        value={address}
                        onChange={(event) => setAddress(event.target.value)}
                        placeholder="Your address.."
                    />
                </div>
                <div>
                    <label htmlFor="gender">Gender:</label>
                    <input
                        type="radio"
                        id="female"
                        name="gender"
                        value="female"
                        checked={gender === 'female'}
                        onChange={(event) => setGender(event.target.value)}
                    />
                    <label htmlFor="female">Female</label>
                    <input
                        type="radio"
                        id="male"
                        name="gender"
                        value="male"
                        checked={gender === 'male'}
                        onChange={(event) => setGender(event.target.value)}
                    />
                    <label htmlFor="male">Male</label>
                    <input
                        type="radio"
                        id="other"
                        name="gender"
                        value="other"
                        checked={gender === 'other'}
                        onChange={(event) => setGender(event.target.value)}
                    />
                    <label htmlFor="other">Other</label>
                </div>
                <div>
                    <label htmlFor="state">State:</label>
                    <select
                        id="state"
                        value={state}
                        onChange={(event) => setState(event.target.value)}
                    >
                        <option value="state1">State 1</option>
                        <option value="state2">State 2</option>
                        <option value="state3">State 3</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="pincode">Pincode:</label>
                    <input
                        type="text"
                        id="pincode"
                        value={pincode}
                        onChange={(event) => setPincode(event.target.value)}
                        placeholder="Your pincode.."
                    />
                </div>
                <div>
                    <label htmlFor="course">Course:</label>
                    <input
                        type="text"
                        id="course"
                        value={course}
                        onChange={(event) => setCourse(event.target.value)}
                        placeholder="Your course.."
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="Your email.."
                    />
                </div>
                <div>
                    <label htmlFor="city">City:</label>
                    <input
                        type="text"
                        id="city"
                        value={city}
                        onChange={(event) => setCity(event.target.value)}
                        placeholder="Your city.."
                    />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default StudentRegistrationForm;*/
import axios from 'axios';
import qs from 'qs';

const UserService = {
    Signup: async (data) => {
        const data_string = qs.stringify(data);
        console.log("data from front", data_string);
        const options = {
            method: 'POST',
            url: 'http://localhost:3000/users/signup',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: data_string,
        };

        try {
            const response = await axios(options);
            return response.data;
        } catch (error) {
            console.error(error);
            throw error.response && error.response.data ? error.response.data : error;
        }
    },
};

/* const UserService = {
    Signup: async (data) => {
        const data_json = JSON.stringify(data)
        console.log("data from front",JSON.stringify(data) );
        try {
            const response = await axios.post('http://localhost:3000/users/signup', data_json,  {
                "Content-Type": "application/x-www-form-urlencoded"
            });// envoyer data en tant que body
            return response.data;
        } catch (error) {
            console.error(error);
            throw error.response && error.response.data ? error.response.data : error;
        }
    }, */
    /* signin: async (data) => {
         try {
             const response = await axios.post('http://localhost:5000/users/signin', data);
             return response;
         } catch (error) {
             console.error(error);
             throw error.response && error.response.data ? error.response.data : error;
         }
     },*/
//};

export default UserService;

import axios from 'axios';

const backend = {
    endpoint: 'https://jsonplaceholder.typicode.com',
};

export const fetchUsers = async () => {
    try {
        const response = await axios.get(`${backend.endpoint}/users`);
        return response.data;
    } catch (error) {
        console.error("Error: ", error);
    }
};

export const addUser = async (userData) => {
    try {
        const response = await axios.post(`${backend.endpoint}/users`, userData);
        return response.data;
    } catch (error) {
        console.error("Error in adding user: ", error);
    }
};

export const updateUser = async (useRadioGroup, userData) => {
    try {
        const response = await axios.put(`${backend.endpoint}/users`, userData);
        return response.data;
    } catch (error) {
        console.error("Error in updating user details: ", error);
    }
};

export const deleteUser = async (userId) => {
    try {
        await axios.delete(`${backend.endpoint}/users`);
    } catch (error) {
        console.error("Error in deleting user: ", error);        
    }
};
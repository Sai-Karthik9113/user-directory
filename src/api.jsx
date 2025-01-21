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
}
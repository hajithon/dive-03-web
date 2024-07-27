import axios from 'axios';

const login = async (nickname) => {
    try {
        const response = await axios.post('http://52.79.249.11/members/login', { nickname });
        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        if (error.response && error.response.status === 404) {
            return { status: 404, message: 'User not found' };
        } else if (error.response) {
            return { status: error.response.status, message: error.response.data.message };
        } else {
            return { status: 500, message: 'Server error' };
        }
    }
};

export default login;

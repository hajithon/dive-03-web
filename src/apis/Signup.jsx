import axios from 'axios';

const signup = async (nickname) => {
    try {
        const response = await axios.post('http://52.79.249.11/members', { nickname });
        if (response.status === 201) {
            return { status: 201, message: 'created' };
        }
    } catch (error) {
        if (error.response && error.response.status === 409) {
            return { status: 409, message: 'Nickname already exists' };
        } else if (error.response) {
            return { status: error.response.status, message: error.response.data.message };
        } else {
            return { status: 500, message: 'Server error' };
        }
    }
};

export default signup;

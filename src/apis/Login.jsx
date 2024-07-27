import axios from 'axios';

const login = async (nickname) => {
    try {
        const response = await axios.post(`http://52.79.249.11/members/login`, { nickname });
        if (response.status === 200) {
            return { status: 200, data: { nickname: response.data.nickname } };
        }
    } catch (error) {
        if (error.response && error.response.status === 404) {
            return { status: 404, message: 'not found' };
        }
    }
};

export default login;

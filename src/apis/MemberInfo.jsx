import axios from 'axios';

const getMemberInfo = async (nickname) => {
    try {
        const response = await axios.get(`http://52.79.249.11/members/${nickname}`);
        if (response.status === 200) {
            return { status: 200, data: response.data };
        }
    } catch (error) {
        if (error.response && error.response.status === 404) {
            return { status: 404, message: 'not found' };
        }
    }
};

export default getMemberInfo;

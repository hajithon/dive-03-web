import axios from 'axios';

const searchArticles = async (nickname, queryParams) => {
    try {
        const response = await axios.get('http://52.79.249.11/articles', { params: { nickname, ...queryParams } });
        return response.data;
    } catch (error) {
        if (error.response) {
            const message = error.response.data ? error.response.data.message : 'Unknown error';
            return { status: error.response.status, message };
        } else {
            return { status: 500, message: 'Server error' };
        }
    }
};

export default searchArticles;

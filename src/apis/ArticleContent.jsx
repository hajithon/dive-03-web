import axios from 'axios';

const getArticleContent = async (articleId) => {
    try {
        const response = await axios.get(`http://52.79.249.11/articles/${articleId}`);
        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        if (error.response) {
            return { status: error.response.status, message: error.response.data.message };
        } else {
            return { status: 500, message: 'Server error' };
        }
    }
};

export default getArticleContent;

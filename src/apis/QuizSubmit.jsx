import axios from 'axios';

const submitQuizAnswers = async (articleId, nickname, quizzes) => {
    try {
        const response = await axios.post(`http://52.79.249.11/articles/quizzes/${articleId}`, {
            nickname,
            quizzes
        });
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

export default submitQuizAnswers;

import axios from 'axios';

const getQuizContent = async (articleId, nickname) => {
    try {
        const response = await axios.get(`http://52.79.249.11/articles/quizzes/${articleId}`, {
            params: { nickname }
        });
        if (response.status === 200) {
            return { status: 200, data: response.data };
        }
    } catch (error) {
        // 명세에 없으므로 기본 처리 없음
    }
};

export default getQuizContent;

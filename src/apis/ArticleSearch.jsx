import axios from 'axios';

const searchArticles = async (params = {}, nickname) => {
    try {
        const response = await axios.get(`http://52.79.249.11/articles`, {
            params,
            headers: {
                'Content-Type': 'application/json'
            },
            data: { nickname }
        });
        return response.data;
    } catch (error) {
        // 명세에 없으므로 기본 처리 없음
        return null;
    }
};

export default searchArticles;

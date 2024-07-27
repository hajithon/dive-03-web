import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import getQuizContent from '../src/apis/QuizContent';

const mock = new MockAdapter(axios);

describe('Get Quiz Content API', () => {
    afterEach(() => {
        mock.reset();
    });

    it('should return quiz content for a given articleId', async () => {
        const mockData = {
            nickname: '참새',
            title: '제목',
            totalQuizzes: 2,
            quizzes: [
                {
                    quizId: 123,
                    number: 1,
                    question: '내 이름은?',
                    options: [
                        { option: 'a', content: '홍길동' },
                        { option: 'b', content: '홍길동' },
                        { option: 'c', content: '홍길동' },
                        { option: 'd', content: '홍길동' }
                    ]
                },
                {
                    quizId: 124,
                    number: 2,
                    question: '내 이름은?',
                    options: [
                        { option: 'a', content: '홍길동' },
                        { option: 'b', content: '홍길동' },
                        { option: 'c', content: '홍길동' },
                        { option: 'd', content: '홍길동' }
                    ]
                }
            ]
        };

        mock.onGet('http://52.79.249.11/articles/quizzes/1', { params: { nickname: '참새' } }).reply(200, mockData);

        const response = await getQuizContent(1, { nickname: '참새' });
        expect(response).toEqual(mockData);
    });

    it('should return 404 not found for non-existent articleId', async () => {
        mock.onGet('http://52.79.249.11/articles/quizzes/999', { params: { nickname: '참새' } }).reply(404);

        const response = await getQuizContent(999, { nickname: '참새' });
        expect(response.status).toBe(404);
    });
});

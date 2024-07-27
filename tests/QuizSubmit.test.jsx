import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import submitQuizAnswers from '../src/apis/QuizSubmit';

const mock = new MockAdapter(axios);

describe('Submit Quiz Answers API', () => {
    afterEach(() => {
        mock.reset();
    });

    it('should return quiz results', async () => {
        const mockData = {
            nickname: '참새',
            earnedMileages: '250P',
            totalMileages: '250P',
            totalQuizzes: 4,
            correctQuizzes: 2,
            title: '제목',
            quizzes: [
                {
                    quizId: 123,
                    number: 1,
                    submittedAnswer: 'a',
                    correctAnswer: 'c'
                },
                {
                    quizId: 234,
                    number: 2,
                    submittedAnswer: 'a',
                    correctAnswer: 'c'
                },
                {
                    quizId: 345,
                    number: 3,
                    submittedAnswer: 'a',
                    correctAnswer: 'c'
                },
                {
                    quizId: 456,
                    number: 4,
                    submittedAnswer: 'a',
                    correctAnswer: 'c'
                }
            ]
        };

        const quizData = {
            nickname: '참새',
            totalQuizzes: 4,
            quizzes: [
                { quizId: 123, number: 1, answer: 'c' },
                { quizId: 234, number: 2, answer: 'c' },
                { quizId: 345, number: 3, answer: 'c' },
                { quizId: 456, number: 4, answer: 'c' }
            ]
        };

        mock.onPost('http://52.79.249.11/articles/quizzes/1').reply(200, mockData);

        const response = await submitQuizAnswers(1, quizData);
        expect(response).toEqual(mockData);
    });
});

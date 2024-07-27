import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import searchArticles from '../src/apis/ArticleSearch';

const mock = new MockAdapter(axios);

describe('Search Articles API', () => {
    afterEach(() => {
        mock.reset();
    });

    it('should return articles for a given nickname', async () => {
        const mockData = {
            nickname: '참새',
            totalArticles: 4,
            articles: [
                { id: 1, title: '제목', category: '공학', length: '15분' },
                { id: 2, title: '제목', category: '공학', length: '15분' },
                { id: 3, title: '제목', category: '공학', length: '15분' },
                { id: 4, title: '제목', category: '공학', length: '15분' }
            ]
        };

        mock.onGet('http://52.79.249.11/articles', { params: { nickname: '참새' } }).reply(200, mockData);

        const response = await searchArticles('참새', {});
        expect(response).toEqual(mockData);
    });

    it('should return 404 not found for non-existent nickname', async () => {
        mock.onGet('http://52.79.249.11/articles', { params: { nickname: '없는닉네임' } }).reply(404);

        const response = await searchArticles('없는닉네임', {});
        expect(response.status).toBe(404);
    });
});

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import login from '../src/apis/Login';

const mock = new MockAdapter(axios);

describe('Login API', () => {
    afterEach(() => {
        mock.reset();
    });

    it('should return user data on successful login', async () => {
        const mockData = { nickname: '참새' };
        mock.onPost('http://52.79.249.11/members/login').reply(200, mockData);

        const response = await login('참새');
        expect(response).toEqual(mockData);
    });

    it('should return 404 not found for non-existent user', async () => {
        mock.onPost('http://52.79.249.11/members/login').reply(404);

        const response = await login('참새');
        expect(response.status).toBe(404);
    });
});

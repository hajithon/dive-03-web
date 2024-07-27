import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import signup from '../src/apis/Signup';

const mock = new MockAdapter(axios);

describe('Signup API', () => {
    afterEach(() => {
        mock.reset();
    });

    it('should return 201 created', async () => {
        mock.onPost('http://52.79.249.11/members').reply(201);

        const response = await signup('참새');
        expect(response.status).toBe(201);
    });

    it('should return 409 conflict', async () => {
        mock.onPost('http://52.79.249.11/members').reply(409);

        const response = await signup('참새');
        expect(response.status).toBe(409);
    });
});

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import getMemberInfo from '../src/apis/MemberInfo';

const mock = new MockAdapter(axios);

describe('Get Member Info API', () => {
    afterEach(() => {
        mock.reset();
    });

    it('should return member information', async () => {
        const mockData = {
            nickname: '참새',
            tier: '브론즈',
            mileage: '250P',
            monthlyMileage: '1200P',
            overallMonthlyRank: '25등',
            tierMonthlyRank: '3등',
            totalMembers: 1000,
            totalTierMembers: 100
        };
        mock.onGet('http://52.79.249.11/members/참새').reply(200, mockData);

        const response = await getMemberInfo('참새');
        expect(response).toEqual(mockData);
    });

    it('should return 404 not found for non-existent member', async () => {
        mock.onGet('http://52.79.249.11/members/참새').reply(404);

        const response = await getMemberInfo('참새');
        expect(response.status).toBe(404);
    });
});

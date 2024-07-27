import axios from 'axios';

const getMemberInfo = async (nickname) => {
    try {
        const response = await axios.get(`http://52.79.249.11/members/${nickname}`);
        if (response.status === 200) {
            return {
                status: 200,
                data: {
                    nickname: response.data.nickname,
                    tier: response.data.tier,
                    mileage: response.data.mileage,
                    monthlyMileage: response.data.monthlyMileage,
                    overallMonthlyRank: response.data.overallMonthlyRank,
                    tierMonthlyRank: response.data.tierMonthlyRank,
                    totalMembers: response.data.totalMembers,
                    totalTierMembers: response.data.totalTierMembers
                }
            };
        }
    } catch (error) {
        if (error.response && error.response.status === 404) {
            return { status: 404, message: 'not found' };
        }
    }
};

export default getMemberInfo;

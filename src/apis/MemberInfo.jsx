import React from 'react';
import axios from 'axios';

const MemberInfo = async (nickname) => {
  try {
    const response = await axios.get(`https://52.79.249.11/member/${nickname}`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return { error: '멤버를 찾을 수 없습니다' };
    } else {
      return { error: '오류가 발생했습니다' };
    }
  }
};

export default MemberInfo;

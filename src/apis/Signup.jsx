import React from 'react';
import axios from 'axios';

const Signup = async (nickname) => {
  try {
    const response = await axios.post(`https://52.79.249.11/member`, {
      nickname
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 409) {
      return { error: '닉네임이 중복됩니다' };
    } else {
      return { error: '오류가 발생했습니다' };
    }
  }
};

export default Signup;

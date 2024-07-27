import React from 'react';
import axios from 'axios';

const QuizContent = async (articleId, nickname) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/articles/quizzes/${articleId}`, {
      data: { nickname }
    });
    return response.data;
  } catch (error) {
    return { error: '오류가 발생했습니다' };
  }
};

export default QuizContent;

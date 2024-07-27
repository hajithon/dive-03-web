import React from 'react';
import axios from 'axios';

const QuizSubmit = async (articleId, quizData) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/articles/quizzes/${articleId}`, quizData);
    return response.data;
  } catch (error) {
    return { error: '오류가 발생했습니다' };
  }
};

export default QuizSubmit;

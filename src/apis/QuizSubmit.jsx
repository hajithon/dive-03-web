import React from 'react';
import axios from 'axios';

const QuizSubmit = async (articleId, quizData) => {
  try {
    const response = await axios.post(`https://52.79.249.11/articles/quizzes/${articleId}`, quizData);
    return response.data;
  } catch (error) {
    return { error: '오류가 발생했습니다' };
  }
};

export default QuizSubmit;

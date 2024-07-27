import React from 'react';
import axios from 'axios';

const ArticleContent = async (articleId, nickname) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/articles/${articleId}`, {
      data: { nickname }
    });
    return response.data;
  } catch (error) {
    return { error: '오류가 발생했습니다' };
  }
};

export default ArticleContent;

import React from 'react';
import axios from 'axios';

const ArticleContent = async (articleId, nickname) => {
  try {
    const response = await axios.get(`https://52.79.249.11/articles/${articleId}`, {
      data: { nickname }
    });
    return response.data;
  } catch (error) {
    return { error: '오류가 발생했습니다' };
  }
};

export default ArticleContent;

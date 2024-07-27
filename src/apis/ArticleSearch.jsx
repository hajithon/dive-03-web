import React from 'react';
import axios from 'axios';

const ArticleSearch = async (params) => {
  try {
    const response = await axios.get(`https://52.79.249.11/articles`, { params });
    return response.data;
  } catch (error) {
    return { error: '오류가 발생했습니다' };
  }
};

export default ArticleSearch;

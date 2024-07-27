import React, { useState } from 'react';
import axiosInstance from './axiosInstance';

const ArticleSearch = () => {
  const [nickname, setNickname] = useState('');
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');
  const [length, setLength] = useState('');
  const [articles, setArticles] = useState([]);
  const [status, setStatus] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axiosInstance.get('/articles', {
        params: { keyword, category, length },
        data: { nickname }
      });
      setArticles(response.data.articles);
      setStatus('검색 성공');
    } catch (error) {
      setStatus('에러 발생');
    }
  };

  return (
    <div>
      <h1>글 검색</h1>
      <input 
        type="text" 
        value={nickname} 
        onChange={(e) => setNickname(e.target.value)} 
        placeholder="닉네임"
      />
      <input 
        type="text" 
        value={keyword} 
        onChange={(e) => setKeyword(e.target.value)} 
        placeholder="검색어"
      />
      <input 
        type="text" 
        value={category} 
        onChange={(e) => setCategory(e.target.value)} 
        placeholder="카테고리"
      />
      <input 
        type="text" 
        value={length} 
        onChange={(e) => setLength(e.target.value)} 
        placeholder="길이"
      />
      <button onClick={handleSearch}>검색</button>
      {status && <p>{status}</p>}
      {articles.length > 0 && (
        <div>
          {articles.map(article => (
            <div key={article.id}>
              <h2>{article.title}</h2>
              <p>카테고리: {article.category}</p>
              <p>길이: {article.length}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ArticleSearch;

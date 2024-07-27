import React, { useState } from 'react';
import axiosInstance from './axiosInstance';

const ArticleContent = () => {
  const [nickname, setNickname] = useState('');
  const [articleId, setArticleId] = useState('');
  const [articleContent, setArticleContent] = useState(null);
  const [status, setStatus] = useState('');

  const handleFetch = async () => {
    try {
      const response = await axiosInstance.get(`/articles/${articleId}`, { data: { nickname } });
      setArticleContent(response.data);
      setStatus('조회 성공');
    } catch (error) {
      setStatus('에러 발생');
    }
  };

  return (
    <div>
      <h1>글 내용 조회</h1>
      <input 
        type="text" 
        value={nickname} 
        onChange={(e) => setNickname(e.target.value)} 
        placeholder="닉네임"
      />
      <input 
        type="text" 
        value={articleId} 
        onChange={(e) => setArticleId(e.target.value)} 
        placeholder="글 ID"
      />
      <button onClick={handleFetch}>조회</button>
      {status && <p>{status}</p>}
      {articleContent && (
        <div>
          <h2>{articleContent.title}</h2>
          {articleContent.contents.map((content, index) => (
            <div key={index}>
              <h3>{content.subtitle}</h3>
              <p>{content.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ArticleContent;

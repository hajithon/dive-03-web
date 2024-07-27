import React, { useState } from 'react';
import axios from 'axios';

const ArticleContent = () => {
  const [articleId, setArticleId] = useState('');
  const [article, setArticle] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setArticleId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.get(`https://api.yourservice.com/articles/${articleId}`)
      .then((response) => {
        if (response.status === 200) {
          setArticle(response.data);
          setErrorMessage('');
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          setErrorMessage('존재하지 않는 글입니다.');
          setArticle(null);
        } else {
          setErrorMessage('오류가 발생했습니다.');
          setArticle(null);
        }
      });
  };

  return (
    <div>
      <h1>Article Content</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Article ID:
          <input
            type="text"
            name="articleId"
            value={articleId}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Get Article Content</button>
      </form>
      {errorMessage && (
        <div>
          <h2>Error</h2>
          <p>{errorMessage}</p>
        </div>
      )}
      {article && (
        <div>
          <h2>{article.title}</h2>
          <p>Nickname: {article.nickname}</p>
          <p>Total Contents: {article.totalContents}</p>
          <div>
            {article.contents.map((content, index) => (
              <div key={index}>
                <h3>{content.subtitle}</h3>
                <p>{content.content}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticleContent;

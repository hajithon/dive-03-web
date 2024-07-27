import React, { useState } from 'react';
import axios from 'axios';

const ArticleSearch = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');
  const [length, setLength] = useState('');
  const [articles, setArticles] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'keyword') {
      setKeyword(value);
    } else if (name === 'category') {
      setCategory(value);
    } else if (name === 'length') {
      setLength(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = {};
    if (keyword) params.keyword = keyword;
    if (category) params.category = category;
    if (length) params.length = length;

    axios.get('https://api.yourservice.com/articles', { params })
      .then((response) => {
        setArticles(response.data.articles);
        setErrorMessage('');
      })
      .catch((error) => {
        setErrorMessage('오류가 발생했습니다.');
        setArticles([]);
      });
  };

  return (
    <div>
      <h1>Article Search</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Keyword:
          <input
            type="text"
            name="keyword"
            value={keyword}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Category:
          <input
            type="text"
            name="category"
            value={category}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Length:
          <input
            type="text"
            name="length"
            value={length}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Search</button>
      </form>
      {errorMessage && (
        <div>
          <h2>Error</h2>
          <p>{errorMessage}</p>
        </div>
      )}
      {articles.length > 0 && (
        <div>
          <h2>Articles</h2>
          <ul>
            {articles.map((article) => (
              <li key={article.id}>
                <h3>{article.title}</h3>
                <p>Category: {article.category}</p>
                <p>Length: {article.length}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ArticleSearch;

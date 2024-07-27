import React, { useState } from 'react';
import axios from 'axios';

const QuizContent = () => {
  const [articleId, setArticleId] = useState('');
  const [quizData, setQuizData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setArticleId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.get(`https://api.yourservice.com/articles/quizzes/${articleId}`)
      .then((response) => {
        if (response.status === 200) {
          setQuizData(response.data);
          setErrorMessage('');
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          setErrorMessage('존재하지 않는 글입니다.');
          setQuizData(null);
        } else {
          setErrorMessage('오류가 발생했습니다.');
          setQuizData(null);
        }
      });
  };

  return (
    <div>
      <h1>Quiz Content</h1>
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
        <button type="submit">Get Quiz Content</button>
      </form>
      {errorMessage && (
        <div>
          <h2>Error</h2>
          <p>{errorMessage}</p>
        </div>
      )}
      {quizData && (
        <div>
          <h2>{quizData.title}</h2>
          <p>Nickname: {quizData.nickname}</p>
          <p>Total Quizzes: {quizData.totalQuizzes}</p>
          <div>
            {quizData.quizzes.map((quiz) => (
              <div key={quiz.quizId}>
                <h3>Question {quiz.number}: {quiz.question}</h3>
                <ul>
                  {quiz.options.map((option, index) => (
                    <li key={index}>{option.option}: {option.content}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizContent;

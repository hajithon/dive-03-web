import React, { useState } from 'react';
import axios from 'axios';

const QuizSubmit = () => {
  const [articleId, setArticleId] = useState('');
  const [nickname, setNickname] = useState('');
  const [answers, setAnswers] = useState({});
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'articleId') {
      setArticleId(value);
    } else if (name === 'nickname') {
      setNickname(value);
    } else {
      setAnswers((prevAnswers) => ({
        ...prevAnswers,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      nickname: nickname,
      totalQuizzes: Object.keys(answers).length,
      quizzes: Object.keys(answers).map((key) => ({
        quizId: parseInt(key),
        answer: answers[key]
      }))
    };

    axios.post(`https://api.yourservice.com/articles/quizzes/${articleId}`, payload)
      .then((response) => {
        if (response.status === 200) {
          setResponseMessage('퀴즈 제출이 성공적으로 완료되었습니다.');
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          setResponseMessage('존재하지 않는 글입니다.');
        } else {
          setResponseMessage('오류가 발생했습니다.');
        }
      });
  };

  return (
    <div>
      <h1>Submit Quiz Answers</h1>
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
        <label>
          Nickname:
          <input
            type="text"
            name="nickname"
            value={nickname}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Answer 1:
          <input
            type="text"
            name="123"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Answer 2:
          <input
            type="text"
            name="234"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Answer 3:
          <input
            type="text"
            name="345"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Answer 4:
          <input
            type="text"
            name="456"
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit Answers</button>
      </form>
      {responseMessage && (
        <div>
          <h2>Response</h2>
          <p>{responseMessage}</p>
        </div>
      )}
    </div>
  );
};

export default QuizSubmit;

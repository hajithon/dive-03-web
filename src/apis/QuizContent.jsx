import React, { useState } from 'react';
import axiosInstance from './axiosInstance';

const QuizContent = () => {
  const [nickname, setNickname] = useState('');
  const [articleId, setArticleId] = useState('');
  const [quizzes, setQuizzes] = useState(null);
  const [status, setStatus] = useState('');

  const handleFetch = async () => {
    try {
      const response = await axiosInstance.get(`/articles/quizzes/${articleId}`, { data: { nickname } });
      setQuizzes(response.data);
      setStatus('조회 성공');
    } catch (error) {
      setStatus('에러 발생');
    }
  };

  return (
    <div>
      <h1>퀴즈 조회</h1>
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
      {quizzes && (
        <div>
          <h2>{quizzes.title}</h2>
          {quizzes.quizzes.map(quiz => (
            <div key={quiz.quizId}>
              <p>{quiz.number}. {quiz.question}</p>
              {quiz.options.map(option => (
                <p key={option.option}>{option.option}: {option.content}</p>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default QuizContent;

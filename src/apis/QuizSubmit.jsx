import React, { useState } from 'react';
import axiosInstance from './axiosInstance';

const QuizSubmit = () => {
  const [nickname, setNickname] = useState('');
  const [articleId, setArticleId] = useState('');
  const [quizzes, setQuizzes] = useState([{ quizId: '', number: '', answer: '' }]);
  const [result, setResult] = useState(null);
  const [status, setStatus] = useState('');

  const handleQuizChange = (index, field, value) => {
    const newQuizzes = [...quizzes];
    newQuizzes[index][field] = value;
    setQuizzes(newQuizzes);
  };

  const handleAddQuiz = () => {
    setQuizzes([...quizzes, { quizId: '', number: '', answer: '' }]);
  };

  const handleSubmit = async () => {
    try {
      const response = await axiosInstance.post(`/articles/quizzes/${articleId}`, {
        nickname,
        totalQuizzes: quizzes.length,
        correctQuizzes: quizzes.filter(q => q.answer).length, // Example logic for correct answers
        quizzes
      });
      setResult(response.data);
      setStatus('제출 성공');
    } catch (error) {
      setStatus('에러 발생');
    }
  };

  return (
    <div>
      <h1>퀴즈 정답 제출</h1>
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
      {quizzes.map((quiz, index) => (
        <div key={index}>
          <input 
            type="text" 
            value={quiz.quizId} 
            onChange={(e) => handleQuizChange(index, 'quizId', e.target.value)} 
            placeholder="퀴즈 ID"
          />
          <input 
            type="text" 
            value={quiz.number} 
            onChange={(e) => handleQuizChange(index, 'number', e.target.value)} 
            placeholder="번호"
          />
          <input 
            type="text" 
            value={quiz.answer} 
            onChange={(e) => handleQuizChange(index, 'answer', e.target.value)} 
            placeholder="정답"
          />
        </div>
      ))}
      <button onClick={handleAddQuiz}>퀴즈 추가</button>
      <button onClick={handleSubmit}>제출</button>
      {status && <p>{status}</p>}
      {result && (
        <div>
          <p>닉네임: {result.nickname}</p>
          <p>얻은 마일리지: {result.earnedMileages}</p>
          <p>총 마일리지: {result.totalMileages}</p>
          <h2>{result.title}</h2>
          {result.quizzes.map(quiz => (
            <div key={quiz.quizId}>
              <p>번호: {quiz.number}</p>
              <p>제출한 정답: {quiz.submittedAnswer}</p>
              <p>정답: {quiz.correctAnswer}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default QuizSubmit;

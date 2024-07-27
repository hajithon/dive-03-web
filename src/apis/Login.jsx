import React, { useState } from 'react';
import axiosInstance from './axiosInstance';

const Login = () => {
  const [nickname, setNickname] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/login', { nickname });
      if (response.status === 200) {
        setStatus('로그인 성공!');
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setStatus('존재하지 않는 멤버');
      } else {
        setStatus('에러 발생');
      }
    }
  };

  return (
    <div>
      <h1>로그인</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={nickname} 
          onChange={(e) => setNickname(e.target.value)} 
          placeholder="닉네임"
        />
        <button type="submit">로그인</button>
      </form>
      <p>{status}</p>
    </div>
  );
};

export default Login;

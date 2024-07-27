import React, { useState } from 'react';
import axiosInstance from './axiosInstance';

const Signup = () => {
  const [nickname, setNickname] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/member', { nickname });
      if (response.status === 201) {
        setStatus('회원가입 성공!');
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        setStatus('닉네임 중복');
      } else {
        setStatus('에러 발생');
      }
    }
  };

  return (
    <div>
      <h1>회원가입</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={nickname} 
          onChange={(e) => setNickname(e.target.value)} 
          placeholder="닉네임"
        />
        <button type="submit">가입</button>
      </form>
      <p>{status}</p>
    </div>
  );
};

export default Signup;

import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [nickname, setNickname] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    setNickname(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { nickname };

    // 실제 회원가입 엔드포인트로 요청을 보냅니다.
    axios.post('https://api.yourservice.com/member', payload)
      .then((response) => {
        if (response.status === 201) {
          setResponseMessage('회원가입이 성공적으로 완료되었습니다.');
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 409) {
          setResponseMessage('닉네임이 중복되었습니다.');
        } else {
          setResponseMessage('오류가 발생했습니다.');
        }
      });
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Sign Up</button>
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

export default Signup;

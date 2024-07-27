import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [nickname, setNickname] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    setNickname(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { nickname };

    // 실제 로그인 엔드포인트로 요청을 보냅니다.
    axios.post('https://api.yourservice.com/login', payload)
      .then((response) => {
        if (response.status === 200) {
          setResponseMessage('로그인이 성공적으로 완료되었습니다.');
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          setResponseMessage('존재하지 않는 닉네임입니다.');
        } else {
          setResponseMessage('오류가 발생했습니다.');
        }
      });
  };

  return (
    <div>
      <h1>Login</h1>
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
        <button type="submit">Login</button>
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

export default Login;

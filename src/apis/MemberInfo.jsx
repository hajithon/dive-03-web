import React, { useState } from 'react';
import axios from 'axios';

const MemberInfo = () => {
  const [nickname, setNickname] = useState('');
  const [memberInfo, setMemberInfo] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setNickname(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.get(`https://api.yourservice.com/member/${nickname}`)
      .then((response) => {
        if (response.status === 200) {
          setMemberInfo(response.data);
          setErrorMessage('');
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          setErrorMessage('존재하지 않는 멤버입니다.');
          setMemberInfo(null);
        } else {
          setErrorMessage('오류가 발생했습니다.');
          setMemberInfo(null);
        }
      });
  };

  return (
    <div>
      <h1>Member Info</h1>
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
        <button type="submit">Get Member Info</button>
      </form>
      {errorMessage && (
        <div>
          <h2>Error</h2>
          <p>{errorMessage}</p>
        </div>
      )}
      {memberInfo && (
        <div>
          <h2>Member Information</h2>
          <p>Nickname: {memberInfo.nickname}</p>
          <p>Tier: {memberInfo.tier}</p>
          <p>Mileage: {memberInfo.mileage}</p>
          <p>Monthly Mileage: {memberInfo.monthlyMileage}</p>
          <p>Overall Monthly Rank: {memberInfo.overallMonthlyRank}</p>
          <p>Tier Monthly Rank: {memberInfo.tierMonthlyRank}</p>
          <p>Total Members: {memberInfo.totalMembers}</p>
          <p>Total Tier Members: {memberInfo.totalTierMembers}</p>
        </div>
      )}
    </div>
  );
};

export default MemberInfo;

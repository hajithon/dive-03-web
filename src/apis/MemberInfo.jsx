import React, { useState } from 'react';
import axiosInstance from './axiosInstance';

const MemberInfo = () => {
  const [nickname, setNickname] = useState('');
  const [memberInfo, setMemberInfo] = useState(null);
  const [status, setStatus] = useState('');

  const handleFetch = async () => {
    try {
      const response = await axiosInstance.get(`/member/${nickname}`);
      setMemberInfo(response.data);
      setStatus('조회 성공');
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
      <h1>멤버 정보 조회</h1>
      <input 
        type="text" 
        value={nickname} 
        onChange={(e) => setNickname(e.target.value)} 
        placeholder="닉네임"
      />
      <button onClick={handleFetch}>조회</button>
      {status && <p>{status}</p>}
      {memberInfo && (
        <div>
          <p>닉네임: {memberInfo.nickname}</p>
          <p>등급: {memberInfo.tier}</p>
          <p>마일리지: {memberInfo.mileage}</p>
          <p>월간 마일리지: {memberInfo.monthlyMileage}</p>
          <p>전체 월간 순위: {memberInfo.overallMonthlyRank}</p>
          <p>등급 내 월간 순위: {memberInfo.tierMonthlyRank}</p>
          <p>총 멤버 수: {memberInfo.totalMembers}</p>
          <p>등급 내 총 멤버 수: {memberInfo.totalTierMembers}</p>
        </div>
      )}
    </div>
  );
};

export default MemberInfo;

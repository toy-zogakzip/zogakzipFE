import React, { useState } from 'react';
import * as A from '../AccessGroup/AccessStyle'; // 스타일 컴포넌트 임포트
import { useNavigate } from 'react-router-dom';

export default function AccessGroup({ groupPassword, groupId }) { // group을 props로 받음
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    console.log("입력된 비밀번호:", password);
    console.log("그룹 비밀번호:", groupPassword);
  
    if (password === groupPassword) {
      navigate(`/groupdetail/${groupId}`);
    } else {
      alert('비밀번호가 틀렸습니다. 다시 시도해 주세요.');
    }
  };

  return (
    <A.CenteredContainer>
      <A.Title>비공개 그룹</A.Title>
      <A.Message>비공개 그룹에 접근하기 위해 권한 확인이 필요합니다.</A.Message>
      <A.SubTitle>비밀번호 입력</A.SubTitle>
      <A.Input
        type="password"
        placeholder="그룹 비밀번호를 입력해 주세요"
        value={password}
        onChange={handlePasswordChange}
      />
      <A.Button onClick={handleSubmit}>제출하기</A.Button>
    </A.CenteredContainer>
  );
}

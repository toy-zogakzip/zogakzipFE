import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // useNavigate 추가
import * as A from './AccessStyle';

export default function AccessGroup({ groups }) { // groups props 추가
  const { id: groupId } = useParams(); // URL에서 groupId 가져오기
  const [password, setPassword] = useState('');
  const [groupPassword, setGroupPassword] = useState(''); // groupPassword 상태 추가
  const navigate = useNavigate(); // navigate 추가

  useEffect(() => {
    const fetchGroupPassword = () => {
      if (!groups) return; // groups가 undefined일 경우 반환

      // groups에서 groupId에 해당하는 비밀번호 가져오기
      const group = groups.find(group => group.id === groupId);
      if (group) {
        setGroupPassword(group.password); // 비밀번호 설정
      }
    };
    
    fetchGroupPassword(); // 비밀번호 가져오기
  }, [groupId, groups]); // 의존성 배열에 추가

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async () => {
    console.log("입력된 비밀번호:", password);
    console.log("groupId:", groupId);
    console.log("groupPassword:", groupPassword); // 로그 추가
  
    try {
      const response = await fetch(`https://zogakzipbe-q0gw.onrender.com/api/groups/${groupId}/verify-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log(data.message);
        navigate(`/groupdetail/${groupId}`);
      } else {
        const errorData = await response.json();
        alert(errorData.message || '비밀번호가 틀렸습니다. 다시 시도해 주세요.');
      }
    } catch (error) {
      console.error('비밀번호 확인 중 오류:', error);
      alert('비밀번호 확인 중 오류가 발생했습니다. 다시 시도해 주세요.');
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

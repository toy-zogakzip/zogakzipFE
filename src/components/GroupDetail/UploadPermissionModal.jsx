import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios'; 
import * as U from './UploadPermissionModalStyle';

export default function UploadPermissionModal({ onClose, onComplete, groupId }) {

  const [password, setPassword] = useState('');
  const [expectedPassword, setExpectedPassword] = useState(''); 
  const navigate = useNavigate();

  // 그룹 비밀번호 가져오기
  useEffect(() => {
    const fetchGroupPassword = async () => {
      try {
        const response = await axios.get(`https://zogakzipbe-q0gw.onrender.com/api/groups/${groupId}/posts`);
        setExpectedPassword(response.data.password); // 응답에서 비밀번호 설정
      } catch (error) {
        console.error("비밀번호를 가져오는 중 오류 발생:", error);
      }
    };

    if (groupId) {
      fetchGroupPassword(); // groupId가 있을 때만 호출
    }
  }, [groupId]);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    if (password.trim() === expectedPassword) {
      onComplete(password); // UploadMemory로 비밀번호 전달
      onClose(); // 모달 닫기
    } else {
      alert("비밀번호가 틀렸습니다.");
    }
  };
  
  return (
    <U.ModalOverlay>
      <U.ModalContent>
        <U.CloseButton onClick={onClose}>x</U.CloseButton>
        <U.CenteredContainer>
          <U.Title>추억 올리기</U.Title>
          <U.SubTitle>올리기 권한 인증</U.SubTitle>
          <U.Input
            type="password"
            placeholder="그룹 비밀번호를 입력해 주세요"
            value={password}
            onChange={handlePasswordChange}
          />
          <U.Button onClick={handleSubmit}>제출하기</U.Button>
        </U.CenteredContainer>
      </U.ModalContent>
    </U.ModalOverlay>
  );
}

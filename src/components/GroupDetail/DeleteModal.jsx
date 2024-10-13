import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalWrapper = styled.div`
  background-color: white;
  padding: 50px;
  border-radius: 8px;
  width: 400px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
`;

const Label = styled.label`
  font-size: 14px;
  margin-bottom: 10px;
  width: 100%;
`;

const Input = styled.input`
  width: 95%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const DeleteButton = styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 12px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
  width: 100%;
  margin-top: 30px;
  &:hover {
    background-color: darkgray;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  margin-bottom: 20px;
`;

const DeleteModal = ({ isOpen, onClose, groupId }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) {
    return null;
  }

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`https://zogakzipbe-q0gw.onrender.com/api/groups/${groupId}`, {
        data: { password },
      });
      console.log('그룹 삭제 성공:', response.data);
      window.location.href = 'http://localhost:5173/'; // Navigate to the main page after deletion
    } catch (error) {
      console.error('그룹 삭제 실패:', error.response ? error.response.data : error.message);
      if (error.response?.status === 400) {
        setError("잘못된 요청입니다.");
      } else if (error.response?.status === 403) {
        setError("비밀번호가 틀렸습니다.");
      } else if (error.response?.status === 404) {
        setError("존재하지 않습니다.");
      } else {
        setError("알 수 없는 오류가 발생했습니다.");
      }
    }
  };

  return (
    <ModalBackground>
      <ModalWrapper>
        <CloseButton onClick={onClose}>×</CloseButton>
        <Title>그룹 삭제</Title>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Label>삭제 권한 인증</Label>
        <Input
          type="password"
          placeholder="그룹 비밀번호를 입력해 주세요"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <DeleteButton onClick={handleDelete}>삭제하기</DeleteButton>
      </ModalWrapper>
    </ModalBackground>
  );
};

export default DeleteModal;

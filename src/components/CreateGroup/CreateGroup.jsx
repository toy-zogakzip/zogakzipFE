import React, { useState, useRef } from 'react';
import * as A from './CreateGroupStyle'; 
import Modal from './CreateGroupModal';
import { useNavigate } from 'react-router-dom'; 

const CreateGroup = ({ onCreateGroup }) => {
  const [groupName, setGroupName] = useState('');
  const [groupDescription, setGroupDescription] = useState('');
  const [password, setPassword] = useState('');
  const [isPublic, setIsPublic] = useState(false);
  const [image, setImage] = useState(null);
  const [groupNameError, setGroupNameError] = useState(''); 
  const [passwordError, setPasswordError] = useState(''); 
  const [modalVisible, setModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState('그룹 생성 성공');
  const [modalMessage, setModalMessage] = useState('새 그룹이 생성되었습니다!');

  const fileInputRef = useRef(null);
  const navigate = useNavigate(); 

  // 이미지 파일 선택 핸들러
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    } else {
      setImage(null);
    }
  };

  // 파일 선택 버튼 클릭 시 파일 입력 열기
  const handleFileButtonClick = () => {
    fileInputRef.current.click();
  };

  // 그룹명 유효성 검사 및 설정
  const handleGroupNameChange = (e) => {
    const name = e.target.value;
    setGroupName(name);

    // 유효하지 않은 특수문자 검사
    const hasInvalidChar = /[^A-Za-z0-9가-힣ㄱ-ㅎㅏ-ㅣ\s!@#$%^_]/.test(name);

    if (name && hasInvalidChar) {
      setGroupNameError('특수문자는 !@#$%^_만 사용하실 수 있습니다.');
    } else {
      setGroupNameError('');
    }
  };

  const handleSubmit = async () => {
    setPasswordError(''); 
  
    // 비밀번호 유효성 검사
    if (password.trim() === '' && !isPublic) {
      setPasswordError('비밀번호를 입력해 주세요.');
      return;
    }
  
    // 새 그룹 정보 생성
    const newGroup = {
      name: groupName,
      password: password, // 비공개 그룹일 때만 비밀번호
      imageUrl: image ? URL.createObjectURL(image) : '', // 이미지 URL 처리
      isPublic: isPublic,
      introduction: groupDescription,
    };
  
    try {
      // 백엔드에 그룹 생성 요청
      const response = await fetch('https://zogakzipbe-q0gw.onrender.com/api/groups', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newGroup),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log("그룹 생성 성공:", data);
        setModalVisible(true);
      } else {
        const errorData = await response.json();
        setModalTitle('오류 발생');
        setModalMessage(errorData.message || '그룹 생성 중 오류가 발생했습니다.');
        setModalVisible(true);
      }
    } catch (error) {
      console.error('그룹 생성 중 오류:', error);
      setModalTitle('오류 발생');
      setModalMessage('그룹 생성 중 오류가 발생했습니다.');
      setModalVisible(true);
    }
  };
  // 모달 닫기 처리
  const handleCloseModal = () => {
    setModalVisible(false);
    navigate('/'); 
  };

  return (
    <A.Container>
      <A.Title>그룹 만들기</A.Title>

      {/* 그룹명 입력 */}
      <A.Label>그룹명</A.Label>
      <A.Input 
        type="text" 
        placeholder="그룹명을 입력해 주세요" 
        value={groupName}
        onChange={handleGroupNameChange} 
      />
      {groupNameError && <A.ErrorMessage>{groupNameError}</A.ErrorMessage>}

      {/* 대표 이미지 입력 */}
      <A.Label>대표 이미지</A.Label>
      <A.InputWrapper>
        <A.ImageInput 
          type="text" 
          readOnly 
          placeholder="파일을 선택해 주세요." 
          value={image ? image.name : ''} 
        />
        <A.CustomButton onClick={handleFileButtonClick}>파일 선택</A.CustomButton>
        <A.FileInput 
          type="file" 
          accept="image/*" 
          onChange={handleImageChange}
          ref={fileInputRef}
          style={{ display: 'none' }} 
        />
      </A.InputWrapper>

      {/* 그룹 소개 입력 */}
      <A.Label>그룹 소개</A.Label>
      <A.TextArea 
        placeholder="그룹을 소개해 주세요" 
        value={groupDescription}
        onChange={(e) => setGroupDescription(e.target.value)}
      />

      {/* 그룹 공개 여부 토글 */}
      <A.Label>그룹 공개 선택</A.Label>
      <A.ToggleContainer>
        <A.PublicLabel>공개</A.PublicLabel>
        <A.ToggleSwitch $isPublic={isPublic} onClick={() => setIsPublic(!isPublic)}>
          <A.ToggleThumb $isPublic={isPublic} />
        </A.ToggleSwitch>
      </A.ToggleContainer>

      {/* 비공개 그룹일 경우 비밀번호 입력 */}
        <>
          <A.Label>비밀번호 생성</A.Label>
          <A.Input 
            type="password" 
            placeholder="그룹 비밀번호를 생성해 주세요" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <A.ErrorMessage>{passwordError}</A.ErrorMessage>} 
        </>

      {/* 그룹 생성 버튼 */}
      <A.Button onClick={handleSubmit}>만들기</A.Button>

      {/* 모달 */}
      {modalVisible && (
        <Modal title={modalTitle} message={modalMessage} onClose={handleCloseModal} />
      )}
    </A.Container>
  );
};

export default CreateGroup;

import React, { useState, useRef } from 'react';
import axios from 'axios';
import * as M from './ModifyModalStyle'; // Assuming you have a separate file for styles

const ModifyModal = ({ isOpen, onClose, groupId, existingGroup = {} }) => {
  const [groupName, setGroupName] = useState(existingGroup.name || '');
  const [groupDescription, setGroupDescription] = useState(existingGroup.introduction || '');
  const [password, setPassword] = useState('');
  const [isPublic, setIsPublic] = useState(existingGroup.isPublic || false);
  const [image, setImage] = useState(null);
  const [groupNameError, setGroupNameError] = useState('');
  const [passwordError, setPasswordError] = useState(''); // New state for password error
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    } else {
      setImage(null);
    }
  };

  const handleFileButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleGroupNameChange = (e) => {
    const name = e.target.value;
    setGroupName(name);
    const hasInvalidChar = /[^A-Za-z0-9가-힣ㄱ-ㅎㅏ-ㅣ\s!@#$%^_]/.test(name);
    if (name && hasInvalidChar) {
      setGroupNameError('특수문자는 !@#$%^_만 사용하실 수 있습니다.');
    } else {
      setGroupNameError('');
    }
  };
  const handleSubmit = async () => {
    // Validation
    if (!groupName) {
        setGroupNameError('그룹명을 입력해 주세요.');
        return;
    }
    if (!password) {
        setPasswordError('비밀번호를 입력해 주세요.');
        return;
    }

    // Log password and form data for debugging
    console.log('입력한 비밀번호:', password);
    const formData = new FormData();
    formData.append('name', groupName);
    formData.append('password', password);
    formData.append('isPublic', isPublic);
    formData.append('introduction', groupDescription);
    if (image) {
        formData.append('imageUrl', image);
    }
    
    // Log the FormData
    for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
    }

    try {
        const response = await axios.put(`https://zogakzipbe-q0gw.onrender.com/api/groups/${groupId}`, formData);
        console.log('그룹 정보 수정 성공:', response.data);
        onClose(); // Close modal
    } catch (error) {
        console.error('그룹 정보 수정 실패:', error.response ? error.response.data : error.message);
        if (error.response?.status === 400) {
            setGroupNameError("잘못된 요청입니다.");
        } else if (error.response?.status === 403) {
            setPasswordError("비밀번호가 틀렸습니다."); // Set password error message
        } else {
            setPasswordError(''); // Reset password error for other errors
        }
    }
};
  if (!isOpen) return null;

  return (
    <M.ModalOverlay>
      <M.Container>
        <M.CloseButton onClick={onClose}>×</M.CloseButton>

        <M.Title>그룹 수정하기</M.Title>

        <M.Label>그룹명</M.Label>
        <M.Input 
          type="text" 
          placeholder={existingGroup.name || "그룹명을 입력해 주세요"} 
          value={groupName}
          onChange={handleGroupNameChange} 
        />
        {groupNameError && <M.ErrorMessage>{groupNameError}</M.ErrorMessage>}

        <M.Label>대표 이미지</M.Label>
        <M.InputWrapper>
          <M.ImageInput 
            type="text" 
            readOnly 
            placeholder="파일을 선택해 주세요." 
            value={image ? image.name : existingGroup.imageUrl || ''} // Show existing image name or the selected file name
          />
          <M.CustomButton onClick={handleFileButtonClick}>파일 선택</M.CustomButton>
          <M.FileInput 
            type="file" 
            accept="image/*" 
            onChange={handleImageChange}
            ref={fileInputRef} 
            style={{ display: 'none' }} 
          />
        </M.InputWrapper>

        <M.Label>그룹 소개</M.Label>
        <M.TextArea 
          placeholder={existingGroup.introduction || "그룹을 소개해 주세요"} 
          value={groupDescription}
          onChange={(e) => setGroupDescription(e.target.value)}
        />

        <M.Label>그룹 공개 여부</M.Label>
        <M.ToggleContainer>
          <M.PublicLabel>공개</M.PublicLabel>
          <M.ToggleSwitch $isPublic={isPublic} onClick={() => setIsPublic(!isPublic)}>
            <M.ToggleThumb $isPublic={isPublic} />
          </M.ToggleSwitch>
        </M.ToggleContainer>

        <M.Label>수정 권한 인증</M.Label>
        <M.Input 
          type="password" 
          placeholder="그룹 비밀번호를 입력해 주세요" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && <M.ErrorMessage>{passwordError}</M.ErrorMessage>}

        <M.Button onClick={handleSubmit}>수정하기</M.Button>
      </M.Container>
    </M.ModalOverlay>
  );
};

export default ModifyModal;

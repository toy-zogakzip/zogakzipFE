import React, { useState, useRef } from 'react';
import * as M from './UploadMemoryStyle';
import { useNavigate, useParams  } from 'react-router-dom'; 
import UploadPermissionModal from './UploadPermissionModal';

const UploadMemory = ({ isOpen, onClose, onUpload }) => {
  const { groupId } = useParams(); // URL에서 groupId를 가져옴

  const [nickname, setNickname] = useState('');
  const [tags, setTags] = useState([]);
  const [inputTag, setInputTag] = useState('');
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const [content, setContent] = useState('');
  const [place, setPlace] = useState('');
  const [memoryDate, setMemoryDate] = useState('');
  const [isPublic, setIsPublic] = useState(false);
  const [postPassword, setPostPassword] = useState(''); // 게시글 비밀번호
  const fileInputRef = useRef(null);
  const [isPermissionModalOpen, setIsPermissionModalOpen] = useState(false);
  const [groupPassword, setGroupPassword] = useState(''); // 그룹 비밀번호
  const navigate = useNavigate();

  const handlePasswordComplete = (password) => {
    setGroupPassword(password); // Save the password received from modal
    setIsPermissionModalOpen(false); // Close the permission modal
    handleUploadMemory(password); // Trigger the upload after password is validated
  };

  const handleTagKeyPress = (e) => {
    if (e.key === 'Enter' && inputTag.trim()) {
      setTags([...tags, inputTag.trim()]);
      setInputTag('');
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

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

  const handleUploadMemory = async (groupPassword) => {
    const formData = new FormData();
    formData.append('nickname', nickname);
    formData.append('title', title);
    formData.append('content', content);
    formData.append('postPassword', postPassword); // User-created post password
    formData.append('groupPassword', groupPassword); // Group password
    formData.append('imageUrl', image); 
    formData.append('tags', JSON.stringify(tags)); 
    formData.append('location', place);
    formData.append('moment', memoryDate);
    formData.append('isPublic', isPublic);

    try {
      const response = await fetch(`https://zogakzipbe-q0gw.onrender.com/api/groups/${groupId}/posts`, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Memory uploaded successfully:', result);
        onUpload(result); // Pass the result to parent
        onClose(); // Close the upload modal
        navigate(`/groupdetail/${groupId}`); // Navigate to the group detail page
      } else {
        const errorResponse = await response.json();
        console.error('Error uploading memory:', errorResponse);
        alert('메모리 업로드에 실패했습니다: ' + errorResponse.message);
      }
    } catch (error) {
      console.error('Fetch error:', error);
      alert('네트워크 오류: 메모리 업로드에 실패했습니다.');
    }
  };

  if (!isOpen) return null;

  return (
    <M.ModalOverlay>
      <M.ModalContent>
        <M.CloseButton onClick={onClose}>x</M.CloseButton>
        <M.Title>추억 올리기</M.Title>

        <M.ColumnsContainer>
          <M.LeftColumn>
            <M.Label>닉네임</M.Label>
            <M.Input
              type="text"
              placeholder="닉네임을 입력해 주세요"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
            <M.Label>제목</M.Label>
            <M.Input
              type="text"
              placeholder="제목을 입력해 주세요"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <M.Label>이미지</M.Label>
            <M.InputWrapper>
              <M.ImageInput 
                type="text" 
                readOnly 
                placeholder="파일을 선택해 주세요." 
                value={image ? image.name : ''} 
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
            <M.Label>본문</M.Label>
            <M.TextArea
              placeholder="본문 내용을 입력해 주세요"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </M.LeftColumn>

          <M.RightColumn>
            <M.Label>태그</M.Label>
            <M.Input
              type="text"
              placeholder="태그 입력 후 엔터"
              value={inputTag}
              onChange={(e) => setInputTag(e.target.value)}
              onKeyPress={handleTagKeyPress}
            />
            <M.TagsContainer>
              {tags.map((tag, index) => (
                <M.Tag key={index}>
                  #{tag} <M.TagRemoveButton onClick={() => handleRemoveTag(tag)}>x</M.TagRemoveButton>
                </M.Tag>
              ))}
            </M.TagsContainer>
            <M.Label>장소</M.Label>
            <M.Input
              type="text"
              placeholder="장소를 입력해 주세요"
              value={place}
              onChange={(e) => setPlace(e.target.value)}
            />
            <M.Label>추억의 순간</M.Label>
            <M.DatePicker
              type="date"
              placeholder="YYYY-MM-DD"
              value={memoryDate}
              onChange={(e) => setMemoryDate(e.target.value)}
            />
            <M.Label>추억 공개 선택</M.Label>
            <M.ToggleSwitch>
              <M.ToggleLabel>공개</M.ToggleLabel>
              <M.ToggleInput
                type="checkbox"
                checked={isPublic}
                onChange={() => setIsPublic(!isPublic)}
              />
            </M.ToggleSwitch>
            <M.Label>비밀번호 생성</M.Label>
            <M.Input
              type="password"
              placeholder="추억 비밀번호 생성"
              value={postPassword}
              onChange={(e) => setPostPassword(e.target.value)} // 게시글 비밀번호 입력
            />
          </M.RightColumn>
        </M.ColumnsContainer>

        <M.UploadButton onClick={() => setIsPermissionModalOpen(true)}>
          올리기
        </M.UploadButton>

        {isPermissionModalOpen && (
          <UploadPermissionModal
            groupId={groupId}
            onComplete={handlePasswordComplete} // Password validation completion
            onClose={() => setIsPermissionModalOpen(false)} // Close the permission modal
          />
        )}
      </M.ModalContent>
    </M.ModalOverlay>
  );
};

export default UploadMemory;

import React, { useState } from 'react';
import * as M from './MemoryFilterStyle';
import searchIcon from '../../assets/icons/search.png';
import UploadMemory from './UploadMemory';
import MemoryList from './MemoryList'; // MemoryList import

const MemoryFilter = () => {
  const [selectedMemory, setSelectedMemory] = useState('public'); // 기본값을 'public'으로 설정
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [inputValue, setInputValue] = useState(''); // 검색어 입력을 위한 상태 추가

  const handleUploadClick = () => {
    setIsModalOpen(true); // Open modal on button click
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close modal
  };

  const handleButtonClick = (memoryType) => {
    setSelectedMemory(memoryType); // 버튼 클릭 시 선택된 메모리 업데이트
    setInputValue(''); // 버튼 클릭 시 검색어 리셋
  };

  const handleSearchChange = (e) => {
    setInputValue(e.target.value); // 입력 값 상태 업데이트
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setInputValue(inputValue); // 엔터 키를 눌렀을 때 검색어 업데이트
    }
  };
  const sampleMemories = [
    {
      id: 1,
      nickname: '사용자1',
      type: 'public',
      title: '에델바이스 꽃말이 소중한 추억인데 길어지면 요렇게 가나다라마바사아자차카구자욱싫어',
      tag:'#야구장 #심심해 #투수교체',
      location: '인천 앞바다',
      date: '24.01.19',
      likes: 120,
      comments: 8,
      password: 1111,
    },
    {
      id: 2,
      nickname: '사용자2',
      type: 'private',
      title: '여름의 바다에서 보낸 날들',
      tag:'#야구장 #심심해 #투수교체',
      location: '부산 해운대',
      date: '23.08.15',
      likes: 95,
      comments: 5,
      password: 1111,

    },
    {
      id: 3,
      nickname: '사용자3',
      type: 'public',
      title: '가을의 정취를 느끼다',
      tag:'#야구장 #심심해 #투수교체',
      location: '가평',
      date: '22.10.10',
      likes: 150,
      comments: 10,
      password: 1111,

    },
    {
      id: 4,
      nickname: '사용자4',
      type: 'private',
      title: '소중한 친구와의 시간',
      tag:'#야구장 #삼성생명 #투수교체',
      location: '서울 한강',
      date: '24.05.05',
      likes: 200,
      comments: 15,
      password: 1111,

    },
    {
      id: 5,
      nickname: '사용자5',
      type: 'public',
      title: '추억의 장소',
      tag:'#야구장 #심심해 #대구경북양돈농협 #에효 #안타그만 #그만쳐 #오레오 #김치수제비',
      location: '강릉',
      date: '23.12.20',
      likes: 110,
      comments: 7,
      password: 1111,

    },
    {
      id: 6,
      nickname: '사용자6',
      type: 'private',
      title: '가족과의 소중한 순간',
      tag:'#야구장 #심심해 #안경잡이',
      location: '제주도',
      date: '24.02.14',
      likes: 180,
      comments: 12,
      password: 1111,

    },
  ];
  // selectedMemory에 따라 메모리 필터링
  const filteredMemories = sampleMemories
    .filter(memory => memory.type === selectedMemory)
    .filter(memory =>
      memory.title.includes(inputValue) || memory.tag.includes(inputValue)
    ); // 제목이나 태그에 검색어 포함 여부 확인

  return (
    <div>
      <M.HeaderWrapper>
        <M.Title>추억 목록</M.Title>
        <M.UploadButton onClick={handleUploadClick}>추억 올리기</M.UploadButton>
      </M.HeaderWrapper>
      <M.GroupListWrapper>
        <M.Button
          selected={selectedMemory === 'public'}
          onClick={() => handleButtonClick('public')}
        >
          공개
        </M.Button>
        <M.Button
          selected={selectedMemory === 'private'}
          onClick={() => handleButtonClick('private')}
        >
          비공개
        </M.Button>
        <M.SearchInputWrapper>
          <img src={searchIcon} alt="Search" style={{ width: '20px', height: '20px' }} />
          <M.SearchInput
            type="text"
            placeholder="태그 혹은 제목을 입력해 주세요"
            value={inputValue} // 입력 상태 연결
            onChange={handleSearchChange} // 검색어 변경 핸들러 추가
            onKeyPress={handleKeyPress} // 엔터 키 이벤트 핸들러 추가
          />
        </M.SearchInputWrapper>
        <M.DropdownWrapper>
          <M.Dropdown>
            <option value="latest">최신순</option>
            <option value="mostPosts">게시글 많은순</option>
            <option value="mostLikes">공감순</option>
            <option value="mostBadges">획득 배지순</option>
          </M.Dropdown>
          <M.DropdownIcon />
        </M.DropdownWrapper>
        <UploadMemory isOpen={isModalOpen} onClose={closeModal} />
      </M.GroupListWrapper>
      {/* 필터링된 메모리 목록을 MemoryList에 전달 */}
      <MemoryList memories={filteredMemories} />
    </div>
  );
};

export default MemoryFilter;
import React, { useState } from 'react';
import * as G from './GroupFilterStyle';
import searchIcon from '../../assets/icons/search.png';

const GroupFilter = ({ selectedGroup, setSelectedGroup, setSearchTerm }) => {
  const [inputValue, setInputValue] = useState(''); // 검색어 입력을 위한 상태 추가

  const handleButtonClick = (groupType) => {
    setSelectedGroup(groupType); // 공개/비공개 그룹 선택 시 필터 적용
    setInputValue(''); // 버튼 클릭 시 검색어 리셋
    setSearchTerm(''); // 검색어도 리셋하여 전체 그룹 표시
  };

  const handleSearchChange = (e) => {
    setInputValue(e.target.value); // 입력 값 상태 업데이트
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setSearchTerm(inputValue); // 엔터 키를 눌렀을 때 검색어 업데이트
    }
  };

  return (
    <div>
      <G.GroupListWrapper>
        <G.Button
          selected={selectedGroup === 'public'} // '공개' 버튼 선택 여부
          onClick={() => handleButtonClick('public')}
        >
          공개
        </G.Button>
        <G.Button
          selected={selectedGroup === 'private'} // '비공개' 버튼 선택 여부
          onClick={() => handleButtonClick('private')}
        >
          비공개
        </G.Button>
        <G.SearchInputWrapper>
          <img src={searchIcon} alt="Search" style={{ width: '20px', height: '20px' }} />
          <G.SearchInput
            type="text"
            placeholder="그룹명을 검색해 주세요"
            value={inputValue} // 입력 상태 연결
            onChange={handleSearchChange} // 검색어 변경 핸들러 추가
            onKeyPress={handleKeyPress} // 엔터 키 이벤트 핸들러 추가
          />
        </G.SearchInputWrapper>
        <G.DropdownWrapper>
          <G.Dropdown>
            <option value="latest">최신순</option>
            <option value="mostPosts">게시글 많은순</option>
            <option value="mostLikes">공감순</option>
            <option value="mostBadges">획득 배지순</option>
          </G.Dropdown>
          <G.DropdownIcon />
        </G.DropdownWrapper>
      </G.GroupListWrapper>
    </div>
  );
};

export default GroupFilter;

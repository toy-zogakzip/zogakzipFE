import styled from 'styled-components';
import { MdSearch } from 'react-icons/md'; 
import { MdArrowDropDown } from 'react-icons/md';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 20px;
  padding-right: 60px;
`;
export const Title = styled.h3`
  position: relative;            /* 절대 위치 지정 */
  left: 50%;                     /* 왼쪽에서 50% */
`;
export const GroupListWrapper = styled.div`
  display: flex;                          /* Flexbox 사용 */
  justify-content: space-between;         /* 요소 간의 공간을 균등하게 분배 */
  align-items: center;                    /* 세로 방향 중앙 정렬 */
  padding: 0 60px;                       /* 패딩 추가 */
`;
export const UploadButton = styled.button`
  background-color: black;       /* 검정색 배경 */
  color: white;                  /* 흰색 글씨 */
  border: none;                  /* 테두리 없음 */
  padding: 10px 50px;           /* 버튼 내부 여백 */
  border-radius: 5px;
  cursor: pointer;               /* 커서 포인터로 변경 */
  margin-left: auto;             /* 왼쪽 여백 추가하여 오른쪽으로 이동 */
  transition: background-color 0.3s; /* 배경색 전환 효과 */

  &:hover {
    background-color: darkgray;  /* hover 시 색상 변경 */
  }
`;
export const Button = styled.button`
  background-color: ${({ selected }) => (selected ? 'black' : 'white')}; /* 선택 여부에 따른 배경색 */
  color: ${({ selected }) => (selected ? 'white' : 'black')};             /* 선택 여부에 따른 글씨 색상 */
  border: none;
  padding: 10px 20px;                   /* 버튼 패딩 조정 */
  border-radius: 20px;
  margin-right: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
  height: 40px;                         /* 버튼 높이 설정 */
  &:hover {
    background-color: #eeeeee; /* hover 시 색상 변경 */
  }
`;

export const SearchInputWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #eeeeee; 
  border: none;
  border-radius: 10px;
  flex: 1;
  height: 40px;                         /* 입력창 높이 설정 */
  padding: 0 10px;                     /* 좌우 패딩 조정 */
`;

export const SearchInput = styled.input`
  border: none;
  background: transparent;
  flex: 1; 
  padding: 10px;                       /* 입력창 패딩 조정 */
  
  &:focus {
    outline: none; /* 포커스 시 테두리 없음 */
  }
`;

export const DropdownWrapper = styled.div`
  position: relative;                   /* 상대 위치 설정 */
`;

export const Dropdown = styled.select`
  padding: 10px;                       /* 드롭다운 패딩 조정 */
  margin-left: 10px;
  border: 1px solid #ccc; 
  border-radius: 10px;
  width: 150px;
  height: 40px;                        /* 드롭다운 높이 설정 */
  appearance: none;                    /* 기본 드롭다운 화살표 숨기기 */
  background-color: white;             /* 배경색 설정 */
  
  &:focus {
    outline: none; /* 포커스 시 테두리 없음 */
  }
`;

export const DropdownIcon = styled(MdArrowDropDown)`
  position: absolute;                  /* 절대 위치 지정 */
  right: 10px;                        /* 오른쪽 여백 설정 */
  top: 50%;                           /* 세로 중앙 정렬 */
  transform: translateY(-50%);       /* 세로 중앙 정렬 */
  pointer-events: none;               /* 아이콘 클릭 방지 */
`;

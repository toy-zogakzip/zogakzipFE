import styled, { css, keyframes } from 'styled-components';

export const GroupDetailWrapper = styled.div`
  display: flex; /* Flexbox로 좌우 배치 */
  gap: 20px; /* 이미지와 텍스트 사이 간격 */
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
`;

export const GroupImage = styled.img`
  width: 200px; /* 이미지 크기 설정 */
  height: auto;
  aspect-ratio: 3 / 3.5;
  object-fit: cover;
  border-radius: 4px;
`;

export const GroupTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; /* 세로 중앙 정렬 */
  flex: 1; /* 남은 공간을 차지 */
  max-width: 1180px; /* 텍스트가 폭을 넘지 않게 */
  width: 100%;
`;

export const GroupName = styled.h1`
  font-size: 24px;
  white-space: nowrap; /* 한 줄로 표시 */
  overflow: hidden; /* 넘치는 텍스트 숨기기 */
  text-overflow: ellipsis; /* 넘치는 부분 ...으로 표시 */
  margin: 0 0 10px 0;
  max-width: 900px; /* 텍스트가 폭을 넘지 않게 */
  width: 80%;

`;

export const GroupDescription = styled.p`
  font-size: 16px;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 두 줄로 제한 */
  -webkit-box-orient: vertical;
  overflow: hidden; /* 넘치는 텍스트 숨기기 */
  text-overflow: ellipsis; /* 넘치는 부분 ...으로 표시 */
  width: 100%;
`;

export const GroupInfoRow = styled.div`
  display: flex; /* 가로로 배치 */
  justify-content: space-between; /* 양쪽 끝에 배치 */
  align-items: center; /* 세로 중앙 정렬 */
  margin-bottom: 10px; /* 아래쪽 여백 */
  width: 100%;
`;

export const Button = styled.button`
  background: none; /* 배경 없음 */
  border: none; /* 테두리 없음 */
  cursor: pointer; /* 마우스 커서 */
  font-size: 14px; /* 글씨 크기 설정 */
  &:hover {
    text-decoration: underline; /* 호버 시 밑줄 추가 */
  }
`;

const bounce = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

// HeartButton 컴포넌트 정의
export const HeartButton = styled.button`
  display: flex; /* 플렉스 박스로 설정 */
  align-items: center; /* 세로 중앙 정렬 */
  justify-content: center;
  background: white; /* 배경색 */
  border: 1px solid black; /* 검정색 테두리 */
  color: black; /* 글씨 색 */
  padding: 10px 14px; /* 패딩 설정 */
  border-radius: 4px; /* 모서리 둥글게 */
  cursor: pointer; /* 마우스 커서 */
  font-size: 14px; /* 글씨 크기 설정 */
  margin-left: 10px; /* 배지와의 간격 */
  width: 180px;

  &:hover {
    background: #f0f0f0; /* 호버 시 배경색 변경 */
  }

  /* 이미지에 애니메이션 적용 */
  img {
    margin-right: 8px; /* 아이콘과 텍스트 간 간격 */
    animation: ${props => props.isAnimating ? css`${bounce} 0.3s ease` : 'none'}; /* 애니메이션 조건 추가 */
  }
`;
export const TitleRow = styled.div`
  display: flex;
  justify-content: space-between; /* 양쪽 끝에 배치 */
  align-items: center; /* 세로 중앙 정렬 */
`;

export const BadgeContainerWrapper = styled.div`
  display: flex;
  align-items: center; /* 세로 중앙 정렬 */
  position: relative; /* 화살표 버튼 위치 조정 */
  width: 100%; /* 전체 폭 사용 */
`;

export const BadgeContainer = styled.div`
  display: flex; /* 배지를 가로로 나열 */
  gap: 10px; /* 배지 간 간격 */
  overflow-x: scroll; /* 수평 스크롤 허용 */
  max-width: 850px; /* 원하는 너비 설정 */
  width: 100%;
  padding: 10px 0; /* 위 아래 패딩 추가 */
  scroll-behavior: smooth; /* 스크롤 부드럽게 */

  /* 스크롤바 숨기기 (WebKit 기반 브라우저에서) */
  &::-webkit-scrollbar {
    display: none; /* 스크롤바 숨기기 */
  }
`;

export const Badge = styled.div`
  background-color: #f0f0f0; /* 옅은 회색 배경 */
  border-radius: 15px; /* 모서리 둥글게 */
  padding: 10px 15px; /* 패딩 설정 */
  display: flex; /* 플렉스 박스로 내용 정렬 */
  align-items: center; /* 수직 중앙 정렬 */
  font-size: 14px; /* 글씨 크기 설정 */
  white-space: nowrap; /* 한 줄로 표시 */
`;
export const ArrowButton = styled.button`
  display: flex; /* 플렉스 박스로 설정 */
  align-items: center; /* 세로 중앙 정렬 */
  justify-content: center;
  background: none; /* 배경 없음 */
  border: 1px solid gray; /* 테두리 없음 */
  cursor: pointer; /* 마우스 커서 */
  font-size: 10px; /* 화살표 크기 설정 */
  padding: 10px 12px; /* 좌우 패딩 */
  border-radius: 50%; /* 완벽한 원형으로 설정 */
  margin: 0px 10px;
`;
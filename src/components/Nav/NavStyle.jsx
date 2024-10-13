import styled from 'styled-components';

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between; /* 양 끝으로 정렬 */
  align-items: center;            /* 세로 방향 중앙 정렬 */
  height: 50px;                  /* 네비게이션 바 높이 */
  background-color: white;       /* 배경색 설정 (필요시) */
  padding: 0 10%;               /* 좌우 패딩 추가 */
  @media screen and (max-width: 834px) { /* 화면 가로폭이 834px 이하일 때 */
    padding: 0 5%;                /* 좌우 패딩 조정 */
  }
`;

export const NavContent = styled.div`
  display: flex;
  justify-content: center;        /* 컨텐츠 중앙 정렬 */
  align-items: center;
  flex-grow: 1;                  /* 공간을 차지하여 중앙으로 배치 */
`;

export const Logo = styled.img`
  width: 100px;                  /* 로고 크기 */
  height: auto;                  /* 이미지 비율에 맞게 높이 자동 조정 */
  position: absolute;            /* 절대 위치 지정 */
  left: 50%;                     /* 왼쪽에서 50% */
  transform: translateX(-50%);  /* 가운데 정렬을 위해 이동 */
`;

export const Button = styled.button`
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

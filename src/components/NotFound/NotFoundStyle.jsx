import styled from 'styled-components';

export const GlobalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 200px); /* 60px는 Nav의 높이에 따라 조정 */
  padding: 0; /* 패딩 제거 */
  box-sizing: border-box; /* 패딩 포함된 높이 계산 */
`;

export const Image = styled.img`
  max-width: 400px; // 반응형 이미지
  height: auto; // 비율에 맞춰 조정
`;

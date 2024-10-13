import styled from 'styled-components';

export const CenteredContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0; /* 패딩 제거 */
  box-sizing: border-box; /* 패딩 포함된 높이 계산 */
`;

export const Title = styled.h1`
  font-size: 21px;
  margin-bottom: 10px;
`;

export const Message = styled.p`
  font-size: 13px;
  margin-bottom: 20px;
`;
export const SubTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 16px;
  width: 500px;
  text-align: left; // 왼쪽 정렬
  display: block; // 블록 요소로 설정
  margin-left: 0; // 기본 마진 조정
`;


export const Input = styled.input`
  padding: 10px;
  font-size: 12px;
  margin-bottom: 20px;
  width: 476px; // 원하는 너비 조정
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 12px;
  cursor: pointer;
  background-color: black; // 원하는 색상으로 변경
  color: white;
  border: none;
  border-radius: 4px;
  width: 500px;
  &:hover {
    background-color: darkgray; 
  }
`;
export const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  margin-bottom: 10px;
`;
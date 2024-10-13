import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 2rem;
  width: 500px;
  max-width: 90%;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 1001;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Title = styled.h2`
  margin-bottom: 1rem;
  font-size: 1.8rem;
`;

export const SubTitle = styled.p`
  margin-bottom: 0.5rem; /* Input과 적당한 간격 */
  font-size: 1.2rem;
  width: 100%; /* Input과 Button의 너비에 맞추기 */
  text-align: left; /* 왼쪽 정렬 */
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1.5rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  box-sizing: border-box; /* padding을 포함한 전체 너비 계산 */
`;

export const Button = styled.button`
  width: 100%; /* Input과 동일한 너비 */
  padding: 0.8rem 1.5rem;
  background-color: #000000;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: darkgray; 
  }
`;

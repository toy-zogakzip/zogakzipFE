// ModalStyle.js
import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background: white;
  border-radius: 8px;
  padding: 60px 80px;
  text-align: center;
`;

export const ModalTitle = styled.h2`
  margin: 0;
`;

export const ModalMessage = styled.p`
  margin: 25px 0;
  color: #3e3e3e;

`;

export const CloseButton = styled.button`
  background: black;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 15px;
  cursor: pointer;
  width: 100%;
  margin-top: 20px;
  &:hover {
    background: black;
  }
`;

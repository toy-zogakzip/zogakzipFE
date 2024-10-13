import React from 'react';
import * as M from './ModalStyle';

const CreateGroupModal = ({ title, message, onClose }) => {
  return (
    <M.ModalOverlay>
      <M.ModalContainer>
        <M.ModalTitle>{title}</M.ModalTitle>
        <M.ModalMessage>{message}</M.ModalMessage>
        <M.CloseButton onClick={onClose}>확인</M.CloseButton>
      </M.ModalContainer>
    </M.ModalOverlay>
  );
};


export default CreateGroupModal;

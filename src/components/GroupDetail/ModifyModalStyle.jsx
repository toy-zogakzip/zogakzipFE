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

export const Container = styled.div`
  position: relative; /* Make container the relative parent for absolute positioning */
  background-color: white;
  border-radius: 15px;
  margin-top: -30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  box-sizing: border-box;
`;

export const CloseButton = styled.button`
  position: absolute; /* Absolutely position inside the container */
  top: 15px; /* Space from the top */
  right: 15px; /* Space from the right */
  background: transparent;
  border: none;
  color: black;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    color: darkgray;
  }
`;
export const Title = styled.h1`
  font-size: 21px;
  margin-bottom: 17px;
`;

export const Label = styled.label`
  font-size: 13px;
  margin-bottom: 5px;
  margin-top: 7px; // 위쪽 마진 추가
  max-width: 500px;
  width: 100%;
  text-align: left;
  display: block;
  margin-left: 0; 
`;

export const PublicLabel = styled.span`
  font-size: 13px; // 글씨 크기
  margin-right: 10px; // 토글 버튼과의 간격
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 13px;
  width: 100%;
  max-width: 480px;
  white-space: nowrap; /* 줄 바꿈 방지 */
  overflow: hidden; /* 넘치는 부분 숨김 */
  margin-bottom: 17px;

`;
export const ErrorMessage = styled.span`
  width: 100%;
  max-width: 500px;
  color: red;
  font-size: 11px;
  display: flex;
  position: relative;
  height: 15px;
  margin-top: -15px;
text-align: left; // 왼쪽 정렬
`;
export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 500px;
  margin-bottom: 17px;
`;

export const ImageInput = styled.input`
  width: 350px;
  padding: 8px;
  font-size: 14px;
  color: #666;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
  cursor: not-allowed;
  line-height: 22px;
  cursor: default;
`;

export const FileInput = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0; /* 숨기기 위해 opacity 설정 */
  cursor: pointer;
`;

export const CustomButton = styled.button`
  padding: 10px 20px;
  background-color: white;
  color: black;
  border: 1px solid black;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  width: 140px;

  &:hover {
    background-color: darkgray;
  }
`;

export const TextArea = styled.textarea`
  padding: 10px;
  font-size: 13px;
  margin-bottom: 17px;
  width: 100%; // 전체 너비로 설정
  height: 100px; // 높이 조정
  max-width: 480px;
  overflow-y: auto; // 세로 스크롤 가능
  resize: none; // 사용자가 크기를 조정하지 못하도록 설정 (원하는 경우에만)
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 13px;
  cursor: pointer;
  background-color: black; // 원하는 색상으로 변경
  color: white;
  border: none;
  border-radius: 4px;
  max-width: 500px;
  width: 100%;
  margin-top: 30px;
  &:hover {
    background-color: darkgray; 
  }
`;

export const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 500px;
  width: 100%;
  text-align: left;
  margin-left: 0;
  margin-bottom: 17px;
`;

export const ToggleSwitch = styled.button`
  position: relative;
  width: 50px;  /* 너비 늘리기 */
  height: 25px; /* 높이 늘리기 */
  background-color: ${({ $isPublic }) => ($isPublic ? 'black' : 'darkgray')};
  border: none;
  border-radius: 12.5px; /* 둥글기 조정 */
  cursor: pointer;
  transition: background-color 0.2s;
`;

// ToggleThumb 컴포넌트
export const ToggleThumb = styled.div`
  position: absolute;
  top: 4px; /* 위치 조정 */  
  left: ${({ $isPublic }) => ($isPublic ? '28px' : '5px')};
  width: 18px; /* 너비 늘리기 */
  height: 18px; /* 높이 늘리기 */
  background-color: white;
  border-radius: 50%;
  transition: left 0.2s;
`;

export const ImagePreview = styled.img`
  width: 100%; // 적절한 너비로 조정
  height: auto; // 비율 유지
  margin-top: 10px; // 위쪽 여백
  border-radius: 8px; // 경계선 둥글게
`;
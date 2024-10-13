import styled from 'styled-components';

// 모달 전체 배경
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 모달 컨텐츠 영역
export const ModalContent = styled.div`
  background: white;
  width: 80%;
  max-width: 1000px;
  padding: 70px;
  border-radius: 10px;
  position: relative;
  max-height: 700px;
  height: 100%;
`;

// 모달 닫기 버튼
export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

// 모달 타이틀
export const Title = styled.h2`
  text-align: center;
  margin-bottom: 50px;
`;

// 두 칼럼을 위한 컨테이너
export const ColumnsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 80px;
  & > div:not(:last-child) {
    border-right: 1px solid #ccc; /* 회색 구분선 */
    padding-right: 80px; /* 구분선에 공간을 주기 위해 */
  }
`;

// 왼쪽 칼럼
export const LeftColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

// 오른쪽 칼럼
export const RightColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

// 공통 입력 필드 스타일링
export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
`;

// 텍스트 영역
export const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  resize: none;
  height: 120px;
`;

// 파일 선택 영역
export const FileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const FileName = styled.div`
  flex: 1;
  font-size: 0.9rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 500px;
  margin-bottom: 15px;
`;

export const ImageInput = styled.input`
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
  flex: 1;
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
// 태그 컨테이너
export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 60px; /* 고정된 높이 설정 */
  overflow-y: auto; 
`;

export const Tag = styled.div`
  background: none;
  padding: 2px 10px;
  font-size: 0.9rem;
  display: flex;
  align-items: flex-start;
  color: #707070;
`;

export const TagRemoveButton = styled.button`
  background: none;
  border: none;
  margin-left: 5px;
  cursor: pointer;
  font-size: 1rem;
  color: #979797;
`;

// 날짜 선택기
export const DatePicker = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
`;

// 토글 스위치
export const ToggleSwitch = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ToggleLabel = styled.span`
  font-size: 1rem;
`;

export const ToggleInput = styled.input`
  width: 40px;
  height: 20px;
  background-color: #ccc;
  border-radius: 15px;
  position: relative;
  appearance: none;
  cursor: pointer;
  
  &:checked {
    background-color: black
  }
  
  &:before {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: 16px;
    height: 16px;
    background-color: white;
    border-radius: 50%;
    transition: 0.3s;
  }
  
  &:checked:before {
    left: 22px;
  }
`;


// 업로드 버튼
export const UploadButton = styled.button`
  display: block;
  margin: 50px auto 30px auto;
  padding: 10px 30px;
  font-size: 1.1rem;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 70%;
  &:hover {
    background-color: darkgray;
  }
`;

// 공통 레이블 스타일
export const Label = styled.label`
  font-size: 1rem;
  display: block;
  margin-top: 5px;
`;

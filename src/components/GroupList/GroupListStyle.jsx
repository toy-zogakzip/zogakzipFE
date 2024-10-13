import styled from 'styled-components';

export const GroupItem = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  margin: 15px;
  flex: 0 0 calc(25% - 30px); // 너비를 고정하여 항상 4개 기준으로 설정
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 4px;
  @media (max-width: 1400px) {
    padding: 15px;
  }

  @media (max-width: 800px) {
    padding: 10px;
  }
  
  @media (max-width: 400px) {
    padding: 7px;
    flex: 0 0 calc(50% - 30px); // 작은 화면에서는 2개씩 표시
  }
`;

export const GroupListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 30px 50px;
  justify-content: flex-start;  // 'space-between' 또는 'center' 사용 가능
  height: auto;
`;

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin-top: 10px;
  @media (max-width: 1400px) {
    width: 100%;
  }
`;

export const InfoItem = styled.div`
  text-align: left;
  color: #888; /* 회색 글씨 */
  font-size: 14px; /* 기본 글꼴 크기 */
  
  @media (max-width: 768px) {
    font-size: 12px; /* 작은 화면에서 글꼴 크기 축소 */
  }

  @media (max-width: 480px) {
    font-size: 10px; /* 더 작은 화면에서 글꼴 크기 축소 */
  }
`;

export const InfoNumber = styled.p`
  color: black; /* 검정색 숫자 */
  margin: 0;
  margin-left: 3px; /* 마진 제거 */
`;

export const GroupImage = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 3 / 3.5;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 15px;
`;

export const GroupName = styled.h3`
  margin-bottom: 5px;
`;

export const GroupDescription = styled.p`
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 15px; /* 기본 글꼴 크기 */
  
  @media (max-width: 768px) {
    font-size: 12px; /* 작은 화면에서 글꼴 크기 축소 */
  }

  @media (max-width: 480px) {
    font-size: 10px; /* 더 작은 화면에서 글꼴 크기 축소 */
  }
`;

export const GroupInfo = styled.div`
  display: flex;
  align-items: center; /* 수직 정렬 */
  margin-bottom: -5px;
  
`;

export const GroupType = styled.span`
  color: #888; /* 연한 회색 글씨 */
  margin-left: 10px; /* 간격 조정 */
  font-size: 14px; /* 기본 글꼴 크기 */
  
  @media (max-width: 768px) {
    font-size: 12px; /* 작은 화면에서 글꼴 크기 축소 */
  }

  @media (max-width: 480px) {
    font-size: 10px; /* 더 작은 화면에서 글꼴 크기 축소 */
  }
`;
export const LoadMoreButton = styled.button`
  margin: 20px 10px;
  padding: 10px 20px;
  background-color: white; 
  color: black;
  border: 1px solid black;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
  &:hover {
    background-color: #eeeeee; /* hover 시 색상 변경 */
  }
`;
export const NoGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50vh;
`;

export const NoGroupImage = styled.img`
  width: 250px;
  height: 250px;
  margin-bottom: 50px;
`;
export const MakeButton = styled.button`
  width: 250px;
  height: 250px;
  background-color: black;
  color: white;
  height: 40px;
  border-radius: 4px;
`;

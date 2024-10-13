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
  width: calc(25% - 30px);
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
  justify-content: flex-start;
  height: auto;
`;

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
  @media (max-width: 1400px) {
    width: 100%;
  }
`;

export const InfoItem = styled.div`
  display: flex; /* Change this to flex to allow horizontal alignment */
  align-items: center; /* Center align the items vertically */
  text-align: left;
  color: black;
  font-size: 13px; /* 기본 글꼴 크기 줄임 */
  gap: 0 5px;
  @media (max-width: 768px) {
    font-size: 10px; /* 작은 화면에서 글꼴 크기 축소 */
  }

  @media (max-width: 480px) {
    font-size: 8px; /* 더 작은 화면에서 글꼴 크기 축소 */
  }
`;

export const InfoNumber = styled.p`
  display: flex;
  align-items: center; 
  color: black; 
  margin: 0;
  font-size: 12px; 
  margin: 0 10px;
  span{
    margin-left: 5px;

  }
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
  overflow: hidden; /* Hide overflow content */
  white-space: nowrap; /* Prevent line breaks */
  text-overflow: ellipsis; /* Add ellipsis for overflow */
  max-width: 100%; /* Ensure it respects the container's width */
  flex-grow: 1; /* Allow it to take available space */
`;
export const MemoryTag = styled.p`
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 15px; /* 기본 글꼴 크기 */
  color: darkgray;
  min-height: 40px;
  /* Restrict to 2 lines and show ellipsis */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 2; /* Number of lines to show */

  @media (max-width: 768px) {
    font-size: 12px; /* 작은 화면에서 글꼴 크기 축소 */
  }

  @media (max-width: 480px) {
    font-size: 10px; /* 더 작은 화면에서 글꼴 크기 축소 */
  }
`;

export const GroupInfo = styled.div`
  display: flex;
`;

export const GroupType = styled.span`
  color: darkgray;
  margin-left: 10px; /* 간격 조정 */
  font-size: 15px; /* 기본 글꼴 크기 줄임 */
  
  @media (max-width: 768px) {
    font-size: 10px; /* 작은 화면에서 글꼴 크기 축소 */
  }

  @media (max-width: 480px) {
    font-size: 8px; /* 더 작은 화면에서 글꼴 크기 축소 */
  }
`;

export const SmallImage = styled.img`
  width: 16px; /* 이미지 크기 조정 */
  height: 16px; /* 이미지 크기 조정 */
  margin-right: 3px; /* 간격 조정 */
`;

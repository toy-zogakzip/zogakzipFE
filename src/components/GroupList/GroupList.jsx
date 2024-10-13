import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as G from './GroupListStyle';
import likeIcon from '../../assets/flowerlogo.png';
import DEFAULT_IMAGE from '../../assets/groupimg2.png'; // 기본 그룹 이미지
import NO_GROUP_IMAGE from '../../assets/nogroup.png'; // 그룹이 없을 때 표시할 이미지 경로
import axios from 'axios'; // axios를 통해 API 요청을 처리

const GroupList = ({ selectedGroup, searchTerm }) => {
  const navigate = useNavigate();
  const [groups, setGroups] = useState([]); // 그룹 데이터 상태
  const [loading, setLoading] = useState(true); // 로딩 상태
  const [visibleCount, setVisibleCount] = useState(12);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await axios.get('https://zogakzipbe-q0gw.onrender.com/api/groups', {
          params: {
            page: 1,
            pageSize: visibleCount, // 페이지당 아이템 수
            sortBy: 'latest', // 원하는 정렬 기준을 설정
            keyword: searchTerm,
            isPublic: selectedGroup === 'public', // 공개 여부
          },
        });
        setGroups(response.data.data); // 그룹 데이터 설정
      } catch (error) {
        console.error('Error fetching groups:', error);
      } finally {
        setLoading(false); // 로딩 완료
      }
    };

    fetchGroups(); // API 호출
  }, [selectedGroup, searchTerm, visibleCount]); // 의존성 배열에 추가

  // 검색어와 선택된 그룹 타입에 맞게 그룹 필터링
  const filteredGroups = Array.isArray(groups)
    ? groups.filter(
        (group) =>
          group.isPublic === (selectedGroup === 'public') &&
          group.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 12);
  };

  const handleGroupClick = (group) => {
    console.log("그룹 클릭:", group); // 그룹 정보 확인
    if (!group.isPublic) {
      navigate(`/accessgroup/${group.id}`); // 비공개 그룹에 접근
    } else {
      navigate(`/groupdetail/${group.id}`); // 공개 그룹에 접근
    }
  };

  const calculateDaysSinceCreation = (createdAt) => {
    const today = new Date();
    const createdDate = new Date(createdAt);
    const differenceInTime = today - createdDate;
    return Math.floor(differenceInTime / (1000 * 3600 * 24)); // 일 단위로 변환
  };

  const handleButtonClick = () => {
    navigate('/creategroup'); // 버튼 클릭 시 /creategroup으로 이동
  };

  return (
    <G.GroupListWrapper>
      {loading ? (
        <p>Loading...</p>
      ) : filteredGroups.length === 0 ? (
        <G.NoGroupWrapper>
          <G.NoGroupImage src={NO_GROUP_IMAGE} alt="그룹 없음" />
          <G.MakeButton onClick={handleButtonClick}>그룹 만들기</G.MakeButton>
        </G.NoGroupWrapper>
      ) : (
        filteredGroups.slice(0, visibleCount).map((group) => (
          <G.GroupItem key={group.id} onClick={() => handleGroupClick(group)}>
            {group.isPublic && (
              <G.GroupImage
                src={group.imageUrl && group.imageUrl.trim() !== '' ? group.imageUrl : DEFAULT_IMAGE} // 유효한 이미지 URL을 사용하거나 기본 이미지로 대체
                alt={`${group.name} 대표 이미지`}
                onError={(e) => {
                  e.target.onerror = null; // prevent infinite loop
                  e.target.src = DEFAULT_IMAGE; // 에러 발생 시 기본 이미지로 대체
                }}
              />
            
            )}
            <G.GroupInfo>
              <span>{`D+${calculateDaysSinceCreation(group.createdAt)}`}</span>
              <G.GroupType>
                {group.isPublic ? ' | 공개' : ' | 비공개'}
              </G.GroupType>
            </G.GroupInfo>
            <G.GroupName>{group.name}</G.GroupName>
            {group.isPublic && (
              <G.GroupDescription>
                {group.introduction.length > 30
                  ? `${group.introduction.slice(0, 30)}...`
                  : group.introduction}
              </G.GroupDescription>
            )}
            <G.InfoRow>
              {group.isPublic && (
                <G.InfoItem>
                  <span>획득 배지</span>
                  <G.InfoNumber>{group.badgeCount}</G.InfoNumber>
                </G.InfoItem>
              )}
              <G.InfoItem>
                <span>추억</span>
                <G.InfoNumber>{group.postCount}</G.InfoNumber>
              </G.InfoItem>
              <G.InfoItem>
                <span>그룹 공감</span>
                <G.InfoNumber style={{ display: 'flex', alignItems: 'center' }}>
                  <img
                    src={likeIcon}
                    alt="그룹 공감 아이콘"
                    style={{
                      width: '16px',
                      height: '16px',
                      marginRight: '4px',
                      verticalAlign: 'middle',
                    }}
                  />
                  {group.likeCount}
                </G.InfoNumber>
              </G.InfoItem>
            </G.InfoRow>
          </G.GroupItem>
        ))
      )}

      {filteredGroups.length > visibleCount && (
        <G.LoadMoreButton onClick={handleLoadMore}>더보기</G.LoadMoreButton>
      )}
    </G.GroupListWrapper>
  );
};

export default GroupList;

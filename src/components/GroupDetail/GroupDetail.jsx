import React, { useRef, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import * as G from './GroupDetailStyle';
import FlowerLogo from '../../assets/flowerlogo.png';
import ModifyModal from './ModifyModal';
import DeleteModal from './DeleteModal';

const GroupDetail = () => {
  const { id } = useParams();
  const [group, setGroup] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [likeCount, setLikeCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const badgeRef = useRef(null);

  useEffect(() => {
    const fetchGroupDetails = async () => {
      try {
        const response = await axios.get(`https://zogakzipbe-q0gw.onrender.com/api/groups/${id}`);
        setGroup(response.data);
        setLikeCount(response.data.likeCount || 0);
      } catch (error) {
        console.error("그룹 정보를 가져오는 중 오류 발생:", error);
        setErrorMessage(error.response?.data?.message || "그룹 정보를 가져오는 중 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchGroupDetails();
  }, [id]);

  const handleLikeButtonClick = async () => {
    try {
      await axios.post(`https://zogakzipbe-q0gw.onrender.com/api/groups/${id}/like`);
      setLikeCount((prevCount) => prevCount + 1);
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 300);
    } catch (error) {
      console.error("공감 보내기 실패:", error);
    }
  };

  if (loading) {
    return <div>로딩 중...</div>;
  }

  if (!group) {
    return <div>{errorMessage || "그룹을 찾을 수 없습니다."}</div>;
  }

  const scrollLeft = () => {
    if (badgeRef.current) {
      const newScrollLeft = badgeRef.current.scrollLeft - 100;
      badgeRef.current.scrollTo({ left: Math.max(newScrollLeft, 0), behavior: 'smooth' });
    }
  };
  
  const scrollRight = () => {
    if (badgeRef.current) {
      const newScrollLeft = badgeRef.current.scrollLeft + 100;
      badgeRef.current.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
    }
  };

  const calculateDaysSinceCreation = (createdAt) => {
    const today = new Date();
    const createdDate = new Date(createdAt);
    return Math.floor((today - createdDate) / (1000 * 3600 * 24));
  };

  return (
    <G.GroupDetailWrapper>
      <G.GroupImage src={group.imageUrl || "그룹명이 없습니다."} alt="대표 이미지" />
      <G.GroupTextWrapper>
        <G.GroupInfoRow>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ color: 'black' }}>
              {group.createdAt ? `D+${calculateDaysSinceCreation(group.createdAt)} ` : "날짜 정보가 없습니다."}
            </span>
            <span style={{ color: '#999', marginLeft: '4px' }}>{group.isPublic ? '| 공개' : '| 비공개'}</span>
          </div>
          <div>
            <G.Button onClick={() => setIsModalOpen(true)}>그룹 정보 수정하기</G.Button>
            <G.Button onClick={() => setIsDeleteModalOpen(true)} style={{ color: 'gray', marginLeft: '10px' }}>그룹 삭제하기</G.Button>
          </div>
        </G.GroupInfoRow>

        <G.TitleRow>
          <G.GroupName>{group.name || "그룹명이 없습니다."}</G.GroupName>
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ color: 'black' }}>{`추억 ${group.postCount || 0}`}</span>
            <span style={{ color: '#999', margin: '0 15px' }}>|</span>
            <span style={{ color: 'black' }}>{`그룹 공감 ${likeCount}`}</span>
          </span>
        </G.TitleRow>

        <G.GroupDescription>
          {group.introduction || "설명이 없습니다."}
        </G.GroupDescription>

        <h3 style={{ marginBottom: '5px', fontSize: '17px' }}>획득 배지</h3>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <G.BadgeContainerWrapper style={{ flex: 1 }}>
            <G.ArrowButton onClick={scrollLeft}>◀</G.ArrowButton>
            <G.BadgeContainer ref={badgeRef}>
              {group.badges && group.badges.length > 0 ? (
                group.badges.map((badge, index) => <G.Badge key={index}>{badge}</G.Badge>)
              ) : (
                <>
                  <G.Badge>👾 7일 연속 추억 등록</G.Badge>
                  <G.Badge>🌼 그룹 공감 1만 개 이상 받기</G.Badge>
                  <G.Badge>💖 게시글 공감 1만 개 이상 받기</G.Badge>
                  <G.Badge>🌼 그룹 공감 1만 개 이상 받기</G.Badge>
                  <G.Badge>💖 게시글 공감 1만 개 이상 받기</G.Badge>
                  <G.Badge>🌼 그룹 공감 1만 개 이상 받기</G.Badge>
                  <G.Badge>💖 게시글 공감 1만 개 이상 받기</G.Badge>
                </>
              )}
            </G.BadgeContainer>
            <G.ArrowButton onClick={scrollRight}>▶</G.ArrowButton>
          </G.BadgeContainerWrapper>
          <G.HeartButton onClick={handleLikeButtonClick} isAnimating={isAnimating}>
            <img src={FlowerLogo} alt="꽃 아이콘" style={{ width: '20px', height: '20px' }} />
            공감 보내기
          </G.HeartButton>
        </div>
      </G.GroupTextWrapper>

      <ModifyModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        groupId={id}
        existingGroup={group}
      />  
      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        groupId={id}
      />
    </G.GroupDetailWrapper>
  );
};

export default GroupDetail;

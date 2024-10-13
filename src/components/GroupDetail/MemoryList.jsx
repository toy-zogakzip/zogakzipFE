import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as M from './MemoryListStyle';
import likeIcon from '../../assets/flowerlogo.png';
import DEFAULT_IMAGE from '../../assets/groupimg2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-regular-svg-icons';

const MemoryListItem = ({ memory, onClick }) => {
  return (
    <M.GroupItem onClick={onClick}>
      <M.GroupImage src={DEFAULT_IMAGE} alt={`대표 이미지`} />
      <M.GroupInfo>
        <span>{memory.nickname}</span>
        <M.GroupType>
          | {memory.type === 'private' ? '비공개' : '공개'}
        </M.GroupType>
      </M.GroupInfo>

      <M.GroupName title={memory.title}>
        {memory.title}
      </M.GroupName>

      <M.MemoryTag>
        <span>{memory.tag}</span>
      </M.MemoryTag>

      <M.InfoRow>
        <M.InfoItem>
          <span>{memory.location}</span>
          <span>•</span>
          <span>{memory.date}</span>
        </M.InfoItem>
        <M.InfoItem>
          <M.SmallImage src={likeIcon} alt="그룹 공감" />
          <span>{memory.likes}</span>
          <M.InfoNumber>
            <FontAwesomeIcon icon={faComment} />
            <span> {memory.comments}</span>
          </M.InfoNumber>
        </M.InfoItem>
      </M.InfoRow>
    </M.GroupItem>
  );
};
const MemoryList = ({ memories = [] }) => { // Provide default value
  const navigate = useNavigate();

  const handleGroupClick = (memory) => {
    if (memory.type === 'private') {
      navigate(`/accessmemory/${memory.id}`);
    } else {
      navigate(`/detailmemory/${memory.id}`);
    }
  };

  return (
    <M.GroupListWrapper>
      {memories.map((memory) => (
        <MemoryListItem
          key={memory.id}
          memory={memory}
          onClick={() => handleGroupClick(memory)}
        />
      ))}
    </M.GroupListWrapper>
  );
};

export default MemoryList;

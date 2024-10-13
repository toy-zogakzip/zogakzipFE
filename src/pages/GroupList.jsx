import React, { useState } from 'react'; // useState 추가
import Content from '../components/GroupList/GroupFilter';
import List from '../components/GroupList/GroupList';

const GroupList = ({ onCreateGroup, groups }) => {
  const [selectedGroup, setSelectedGroup] = useState('public'); // 상태 추가
  const [searchTerm, setSearchTerm] = useState(''); // 검색어 상태 추가

  return (
    <>
      {/* GroupFilter에 selectedGroup, setSelectedGroup, setSearchTerm 전달 */}
      <Content 
        selectedGroup={selectedGroup} 
        setSelectedGroup={setSelectedGroup} 
        setSearchTerm={setSearchTerm} // setSearchTerm 전달
      />
      {/* 필터링된 그룹 리스트를 GroupList에 전달 */}
      <List groups={groups} selectedGroup={selectedGroup} searchTerm={searchTerm} /> {/* searchTerm 전달 */}
    </>
  );
};

export default GroupList;

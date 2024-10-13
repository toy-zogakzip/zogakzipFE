import Router from './Router';
import { GlobalStyle } from './style/globalStyle';
import React, { useState } from 'react';

const App = () => {
  const [groups, setGroups] = useState([]); // 그룹 상태

  const handleCreateGroup = (newGroup) => {
    setGroups((prevGroups) => [...prevGroups, newGroup]); // 새로운 그룹 추가
  };

  return (
    <>
      <GlobalStyle />
      <Router groups={groups} onCreateGroup={handleCreateGroup} />
    </>
  );
};

export default App;

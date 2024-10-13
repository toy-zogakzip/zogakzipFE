import React from 'react';
import Detail from '../components/GroupDetail/GroupDetail';
import MemoryFilter from '../components/GroupDetail/MemoryFilter';
import MemoryList from '../components/GroupDetail/MemoryList';

const GroupDetail = ({ groups }) => { // groups를 props로 받음
  return (
    <>
    <Detail groups={groups} />
    <MemoryFilter/>
    <MemoryList/>
    </>
  );
};

export default GroupDetail;

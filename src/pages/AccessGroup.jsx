import React from 'react';
import Access from '../components/AccessGroup/AccessGroup';

const AccessGroup = ({ groupPassword, groupId }) => { 
  console.log('groupId:',groupId);
  console.log('groupPassword:',groupPassword);
  return (
    <>
      <Access groupPassword={groupPassword} groupId={groupId} />
    </>
  );
};

export default AccessGroup;

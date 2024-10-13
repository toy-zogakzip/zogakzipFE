import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { styled } from 'styled-components';
import AccessGroup from './pages/AccessGroup'; 
import AccessMemory from './pages/AccessMemory'; 
import GroupDetail from './pages/GroupDetail';
import GroupList from './pages/GroupList';
import NotFound from './pages/NotFound'; 
import UploadMemory from './pages/UploadMemory'; 
import Nav from './components/Nav/Nav';
import NavButton from './components/Nav/NavButton';
import CreateGroup from './components/CreateGroup/CreateGroup';
import { useState } from 'react';
import DetailMemory from './pages/DetailMemory'

function AppNavigation({ onCreateGroup, groups, selectedGroup, setSelectedGroup, searchTerm, setSearchTerm }) {
  const location = useLocation();

  if (location.pathname === '/') {
    return (
      <>
        <NavButton 
          setSelectedGroup={setSelectedGroup}
          setSearchTerm={setSearchTerm} 
        />
        <GlobalWrapper>
          <Routes>
            <Route 
              path="/" 
              element={<GroupList onCreateGroup={onCreateGroup} groups={groups} selectedGroup={selectedGroup} searchTerm={searchTerm} />} 
            />
          </Routes>
        </GlobalWrapper>
      </>
    );
  }

  return (
    <>
      <Nav />
      <GlobalWrapper>
        <Routes>
          {/* URL 파라미터에서 id를 가져와 그룹 정보를 찾고 AccessGroup에 전달 */}
          <Route 
            path="/accessgroup/:id" 
            element={<AccessGroup />} 
          />          
          <Route path="/accessmemory/:id" element={<AccessMemory />} />
          <Route path="/creategroup" element={<CreateGroup onCreateGroup={onCreateGroup} />} />
          <Route 
            path="/groupdetail/:id" 
            element={<GroupDetail groups={groups} />} // groups를 props로 전달
          />
          <Route path="/uploadmemory" element={<UploadMemory />} />
          <Route path="/detailmemory/:id" element={<DetailMemory />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </GlobalWrapper>
    </>
  );
}

// URL 파라미터를 사용하여 그룹 비밀번호를 가져오는 함수
function getGroupPassword(groups) {
  const { pathname } = useLocation();
  const id = parseInt(pathname.split('/').pop()); // URL의 마지막 부분이 id임

  const group = groups.find(group => group.id === id);
  
  return group ? group.password : null; // 그룹이 없으면 null 반환
}

export default function Router() {
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState('public'); // 기본값으로 '공개' 그룹
  const [searchTerm, setSearchTerm] = useState(''); // 검색어 상태 추가

  const handleCreateGroup = (newGroup) => {
    setGroups((prevGroups) => [...prevGroups, newGroup]);
  };

  return (
    <BrowserRouter>
      <AppNavigation 
        onCreateGroup={handleCreateGroup} 
        groups={groups} 
        selectedGroup={selectedGroup} 
        setSelectedGroup={setSelectedGroup} 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
      />
    </BrowserRouter>
  );
}

const GlobalWrapper = styled.main`
  @media screen and (min-width: 834px) {
    padding: 4rem;
  }
  @media screen and (max-width: 833px) {
    padding: 2rem;
  }
  @media screen and (max-width: 400px) {
    padding: 2rem;
  }
`;

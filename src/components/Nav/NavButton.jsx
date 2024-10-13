import React from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅 임포트
import * as N from './NavStyle'; // 스타일 컴포넌트 임포트
import logo from '../../assets/logo.png'; // 로고 이미지 임포트

const NavButton = ({ setSelectedGroup, setSearchTerm }) => {
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleLogoClick = () => {
    setSelectedGroup('public'); // 기본 그룹으로 리셋
    setSearchTerm(''); // 검색어 리셋
    navigate('/'); // 메인 페이지로 이동
  };

  const handleButtonClick = () => {
    navigate('/creategroup'); // 버튼 클릭 시 /creategroup으로 이동
  };

  return (
    <N.NavWrapper>
      <N.NavContent>
        <N.Logo src={logo} alt="Logo" onClick={handleLogoClick} /> {/* 로고 클릭 시 함수 호출 */}
        <N.Button onClick={handleButtonClick}>그룹 만들기</N.Button> {/* 버튼 클릭 시 함수 호출 */}
      </N.NavContent>
    </N.NavWrapper>
  );
};

export default NavButton;

import React from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅 임포트
import * as N from './NavStyle';  // 스타일 컴포넌트 임포트
import logo from '../../assets/logo.png'; // 로고 이미지 임포트

export default function Nav() {
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleLogoClick = () => {
    navigate('/'); // 로고 클릭 시 메인 페이지로 이동
  };

  return (
    <N.NavWrapper>
      <N.NavContent>
        <N.Logo src={logo} alt="Logo" onClick={handleLogoClick} />
      </N.NavContent>
    </N.NavWrapper>
  );
}

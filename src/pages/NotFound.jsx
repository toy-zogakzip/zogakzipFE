import React from 'react';
import notFoundImage from '../assets/notfound.png'; // 이미지 경로 조정
import { GlobalWrapper, Image } from '../components/NotFound/NotFoundStyle'; // 스타일 import

const NotFound = () => {
  return (
    <GlobalWrapper>
      <Image src={notFoundImage} alt="Not Found" /> {/* 스타일 적용 */}
    </GlobalWrapper>
  );
};

export default NotFound;

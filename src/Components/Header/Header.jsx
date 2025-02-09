import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import HeaderIcon from '../../Element/HeaderIcon';

const Header = ({ msg, margin, children, profile }) => {
  return (
    <div>
      {' '}
      <MainHeader>{children}</MainHeader>
    </div>
  );
};
export default Header;
const MainHeader = styled.div`
  position: relative;
  font-family: Pretendard;
  font-style: Medium;
  border-bottom: 1px solid #f5f5f5;
  background-color: #ffffff;
  height: 48px;
  font-weight: 500;
  font-size: 17px;
  line-height: 20px;
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 400;
  line-height: 21.78px;
  width: 375px;
`;
export const PointerBox = styled.div`
  margin-left: 16px;
`;
export const MessageBox = styled.div`
  margin-left: ${(props) => props.margin};
  font-family: Pretendard;
  font-weight: 500;
  font-size: 17px;
`;
export const ImgBox = styled.img`
  width: 24px;
  height: 24px;

  border-radius: 100%;
  margin-left: ${(props) => props.margin};
`;
export const Chatbot = styled.img`
  margin-left: ${(props) => props.margin};
  cursor: pointer;
`;
export const Ban = styled.img`
  cursor: pointer;
  margin-left: ${(props) => props.margin};
`;

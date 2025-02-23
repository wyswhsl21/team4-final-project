import React, { useEffect } from 'react';
import { trainApi } from '../apis/Instance';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Loading from '../Components/Loading/Loading';
const KakaoLogin = () => {
  const code = new URL(window.location.href).searchParams.get('code');
  const navigate = useNavigate();
  useEffect(() => {
    kakaoLogin();
  }, []);

  const kakaoLogin = async () => {
    try {
      const { data } = await trainApi.kakaoLogin(code);

      const token = data.token;
      const userId = data.result[0].id;
      const nickname = data?.result?.[0]?.nickname;
      if (data.token) {
        localStorage.setItem('userId', userId);
        localStorage.setItem('token', token);
        nickname === 'default nickname'
          ? navigate('/socialagree')
          : navigate('/subwaypage');
      }
    } catch (error) {
      return;
    }
  };

  return <Loading />;
};

export default KakaoLogin;

const Wrap = styled.div`
  width: 375px;
  height: 100vh;

  margin: 0 auto;
  padding: 0;
  outline: 0;
  border: 0;

  @media screen and (min-width: 320px) and (max-width: 375px) {
    font-size: 1rem;
  } ;
`;
const Div = styled.div`
  height: 812px;
  align-items: center;
  justify-content: center;
  display: flex;
  margin: 0 auto;
  background-color: #fa3a45;
`;

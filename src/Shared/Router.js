import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NaverLogin from '../Pages/NaverLogin';
import MainPage from '../Pages/MainPage';
import ProfilePic from '../Components/Profile/ProfilePic';
import ChattingPage from '../Pages/ChattingPage';
import SubwayPage from '../Pages/Main/SubwayPage';
import { Suspense, lazy } from 'react';
import KakaoLogin from '../Pages/KakaoLogin';
import GoogleLogin from '../Pages/GoogleLogin';
import ResetPage from '../Pages/Login/ResetPage';
import AuthPage from '../Pages/Login/AuthPage';
import CompletePage from '../Pages/Login/CompletePage';
import EmailPage from '../Pages/Login/EmailPage';
import AgreePage from '../Pages/Signup/AgreePage';
import SignupPage from '../Pages/Signup/SignupPage';
import SetGenderPage from '../Pages/Signup/SetGenderPage';
import SetProfilePage from '../Pages/Signup/SetProfilePage';
import PickProfilePage from '../Pages/Signup/PickProfilePage';
import SetAgePage from '../Pages/Signup/SetAgePage';
import StationSelectPage from '../Pages/Main/StationSelectPage';
import Loading from '../Components/Loading/Loading';
import StationSearchPage from '../Pages/Main/StationSearchPage';
import FailPage from '../Pages/Matching/FailPage';
import MypagePage from '../Pages/Mypage/MypagePage';
import NamePage from '../Pages/Mypage/NamePage';
import GuidePage from '../Pages/Guide/GuidePage';
import ProfilePage from '../Pages/Mypage/ProfilePage';
import PasswordPage from '../Pages/Mypage/PasswordPage';

const LoginPage = lazy(() => import('../Pages/Login'));
const ConversPage = lazy(() => import('../Pages/ConversPage'));
const MyPage = lazy(() => import('../Components/Profile/Mypage'));

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/social/oauth/callback" element={<KakaoLogin />} />
          <Route path="/social/nauth/callback" element={<NaverLogin />} />
          <Route path="/social/gauth/callback" element={<GoogleLogin />} />
          {/* 로그인 라우터 */}
          <Route path="/email" element={<EmailPage />} />
          <Route path="/reset" element={<ResetPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/complete" element={<CompletePage />} />
          {/* 회원가입 라우터 */}
          <Route path="/agree" element={<AgreePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/setgender" element={<SetGenderPage />} />
          <Route path="/setage" element={<SetAgePage />} />
          <Route path="/setprofile" element={<SetProfilePage />} />
          <Route path="/pickprofile" element={<PickProfilePage />} />
          <Route path="/mypage" element={<MypagePage />} />
          <Route path="/changename" element={<NamePage />} />
          <Route path="/guide" element={<GuidePage />} />
          <Route path="/changeprofile" element={<ProfilePage />} />
          <Route path="profilepic" element={<ProfilePic />} />
          <Route path="changepw" element={<PasswordPage />} />
          {/* 메인페이지 라우터 */}
          <Route path="/subwaypage" element={<SubwayPage />} />
          <Route path="/stationselect" element={<StationSelectPage />} />
          <Route path="/stationsearch" element={<StationSearchPage />} />

          <Route path="/main" element={<MainPage />} />
          <Route path="/converspage" element={<ConversPage />} />
          <Route path="/chattingpage" element={<ChattingPage />} />
          <Route path="/failpage" element={<FailPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;

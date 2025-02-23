import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Loading from '../Components/Loading/Loading';
import FailPage from '../Pages/Matching/FailPage';
// 분기별로 잘 나눠야 ... 될거같다 ..
// 모든 페이지를 로딩 해버리니 로딩 뜨는게 너무 거슬린다.
const LoginPage = lazy(() => import('../Pages/Login'));
const SubwayPage = lazy(() => import('../Pages/Main/SubwayPage'));
const ChattingPage = lazy(() => import('../Pages/ChattingPage'));
const PickProfilePage = lazy(() => import('../Pages/Signup/PickProfilePage'));
const MypagePage = lazy(() => import('../Pages/Mypage/MypagePage'));
const GuidePage = lazy(() => import('../Pages/Guide/GuidePage'));
const ProfilePage = lazy(() => import('../Pages/Mypage/ProfilePage'));
const PasswordPage = lazy(() => import('../Pages/Mypage/PasswordPage'));
const LogoutPage = lazy(() => import('../Pages/Logout/LogoutPage'));
const NamePage = lazy(() => import('../Pages/Mypage/NamePage'));
const KakaoLogin = lazy(() => import('../Pages/KakaoLogin'));
const NaverLogin = lazy(() => import('../Pages/NaverLogin'));
const GoogleLogin = lazy(() => import('../Pages/GoogleLogin'));
const EmailPage = lazy(() => import('../Pages/Login/EmailPage'));
const ResetPage = lazy(() => import('../Pages/Login/ResetPage'));
const AuthPage = lazy(() => import('../Pages/Login/AuthPage'));
const SetProfilePage = lazy(() => import('../Pages/Signup/SetProfilePage'));
const AgreePage = lazy(() => import('../Pages/Signup/AgreePage'));
const SignupPage = lazy(() => import('../Pages/Signup/SignupPage'));
const SetGenderPage = lazy(() => import('../Pages/Signup/SetGenderPage'));
const SetAgePage = lazy(() => import('../Pages/Signup/SetAgePage'));
const StationSelectPage = lazy(() => import('../Pages/Main/StationSelectPage'));
const StationSearchPage = lazy(() => import('../Pages/Main/StationSearchPage'));
const SocialAgreePage = lazy(() => import('../Pages/Signup/SocialAgreePage'));
const AnnouncementPage = lazy(() =>
  import('../Pages/Announcement/AnnouncementPage')
);
const AnnounceWritePage = lazy(() =>
  import('../Pages/Announcement/AnnounceWritePage')
);
const AnnounceDetailPage = lazy(() =>
  import('../Pages/Announcement/AnnounceDetailPage')
);
const ReportPage = lazy(() => import('../Pages/Report/ReportPage'));
const StartSelectPage = lazy(() => import('../Pages/Main/StartSelectPage'));

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
          {/* 회원가입 라우터 */}
          <Route path="/agree" element={<AgreePage />} />
          <Route path="/socialagree" element={<SocialAgreePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/setgender" element={<SetGenderPage />} />
          <Route path="/setage" element={<SetAgePage />} />
          <Route path="/setprofile" element={<SetProfilePage />} />
          <Route path="/pickprofile" element={<PickProfilePage />} />
          <Route path="/mypage" element={<MypagePage />} />
          <Route path="/changename" element={<NamePage />} />
          <Route path="/guide" element={<GuidePage />} />
          <Route path="/changeprofile" element={<ProfilePage />} />
          <Route path="changepw" element={<PasswordPage />} />
          <Route path="/announce" element={<AnnouncementPage />} />
          <Route path="/announcewrite" element={<AnnounceWritePage />} />
          {/* 메인페이지 라우터 */}
          <Route path="/subwaypage" element={<SubwayPage />} />
          <Route path="/stationselect" element={<StationSelectPage />} />
          <Route path="/stationsearch" element={<StationSearchPage />} />
          <Route path="/chattingpage" element={<ChattingPage />} />
          <Route path="/failpage" element={<FailPage />} />
          <Route path="/logoutpage" element={<LogoutPage />} />
          <Route path="/announcedetail" element={<AnnounceDetailPage />} />
          <Route path="/report" element={<ReportPage />} />
          <Route path="/startselect" element={<StartSelectPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;

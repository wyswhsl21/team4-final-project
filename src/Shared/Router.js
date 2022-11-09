import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../Pages/MainPage";
import SitdownPage from "../Pages/SitdownPage";
import StandPage from "../Pages/StandPage";
import Login3 from "../Pages/Login3";
import KakaoLogin from "../Pages/KakaoLogin";
import GoogleLogin from "../Pages/GoogleLogin";
import NaverLogin from "../Pages/NaverLogin";
import SignUp from "../Pages/SignUp";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login3 />} />
        <Route path="/kakaoLogin" element={<KakaoLogin />} />
        <Route path="/googleLogin" element={<GoogleLogin />} />
        <Route path="/naverLogin" element={<NaverLogin />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/main" element={<MainPage />} />
        <Route path="/sitdownpage" element={<SitdownPage />} />
        <Route path="/standpage" element={<StandPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

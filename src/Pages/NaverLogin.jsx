import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { trainApi } from "../MyTools/Instance";
import { Cookies, useCookies } from "react-cookie";
import jwtDecode from "jwt-decode";
import FirstLogo from "../Assets/FirstLogo.svg";

const NaverLogin = () => {
  const navigator = useNavigate();
  const cookies = new Cookies();
  const [tokens, setTokens] = useCookies(["token"]);

  // useEffect(() => {
  // 인가코드 확인하기
  const code = new URL(window.location.href).searchParams.get("code");
  const state = new URL(window.location.href).searchParams.get("state");
  console.log("인가코드", code);
  // const yhURL = process.env.REACT_APP_YH_HOST;
  const thURL = process.env.REACT_APP_TH_S_HOST;
  // const thURL = process.env.REACT_APP_TH_HOST;
  console.log(1);
  //1. url에 뜬 인가코드 추출한 것 토큰 get요청 할 때 url 쿼리로 보내기.
  // 2. 토큰(카카오토큰이든 자체 jwt토큰이든 )get으로 받기
  axios
    .get(
      `${thURL}/auth/naver/callback?code=${code}&state=${state}`
      //       {
      //   headers: {
      //     Authorization: `${token}`,
      //   },
      // }
    )
    .then((res) => {
      console.log(res);
      console.log(res.data);
      console.log(res.data.jwtToken);
      console.log(res.data.message);

      const token = res.data.jwtToken;
      const msg = res.data.message;
      const doneInfo = res.data.doneAdditionalInfo;
      if (token) {
        setTokens("token", token, { path: "/" });
      }
      if (doneInfo === true) {
        navigator("/subwaypage");
      } else {
        navigator("/signup");
      }
      alert(`${msg}`);
    });
  //   .catch((err) => {
  //     console.log(1);
  //     console.log(err);
  //   });
  // // }, []);
  return (
    <div className="mx-[auto] my-[0px]">
      빠른로딩중..
      <img src={FirstLogo} alt="firstlogo" />
    </div>
  );
};

export default NaverLogin;

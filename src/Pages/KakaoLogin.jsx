import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  KAKAO_REDIRECT_URI,
  KAKAO_REST_API_KEY,
  KAKAO_CLIENT_SECRET,
} from "./Login/KakaoLoginData";
import { Cookies } from "react-cookie";
import axios from "axios";

const KakaoLogin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  //프론트에서 인가코드 받아서 서버에 넘겨줄 경우 -------
  const KAKAO_CODE = location.search.split("=")[1];
  console.log("인가코드:", KAKAO_CODE);
  const cookies = new Cookies();
  const token = cookies.get("token");
  //프론트에서 인가코드 받아서 서버에 넘겨줄 경우 -------

  // const cookies = new Cookies();
  // const token = cookies.get("token");
  // console.log(token);
  // const headers = {
  //   Authorization: `${token}`,
  // };
  // console.log(headers);
  //   console.log(token);

  //token 저장
  const getKakaoToken = async () => {
    //카카오에서 인가코드 받고 서버에 토큰 전달
    await axios
      .post(
        `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&code=${KAKAO_CODE}`,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((res) => {
        console.log(res);
        if (res.data.access_token) {
          cookies.set("token", res.data.access_token);
          // cookies.set("userId",res.data.userId);
          alert("접속하셨습니다.");
          // window.loacation.replace("/");
        }
        // console.log(data);
      })
      .catch((err) => {
        console.log(err);
        alert("접속에 실패하셨습니다");
        // navigate("/");
      });
    //서버에서 프론트로 토큰 전달해줄 때
    // const getKakaoToken = async () => {
    // const headers = {
    //   "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
    // };
    // const body = {
    //   body: `grant_type=authorization_code&client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&code=${KAKAO_CODE}`,
    // };
    //카카오에서 인가코드 받고 서버에 토큰 전달
    // headers: {
    //   Authorization: `Bearer ${kakaoToken}`,
    // },
    // await axios
    //   .get("서버주소/oauth/kakao/callback", {
    //     headers,
    //   })
    //   .then((res) => {
    //     console.log(res);
    //     // if (data.data.access_token) {
    //     //   cookies.set("token", data.data.access_token);
    //     //   alert("접속하셨습니다.");
    //     // navigate("/");
    //     // }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    //////////////////////////
    // fetch(`https://kauth.kakao.com/oauth/token`, {
    //   fetch(
    //     `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&code=${KAKAO_CODE}`,
    //     {
    //       method: "POST",
    //       header: {
    //         "Content-Type": "application/x-www-form-urlencoded;",
    //       },
    //       // body: `grant_type=authorization_code&client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&code=${KAKAO_CODE}`,
    //       //   body: `grant_type=authorization_code&client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&code=${KAKAO_CODE}&client_secret=${CLIENT_SECRET}`,
    //     }
    //   )
    //     .then((res) => res.json())
    //     //   .then((res) => console.log(res))
    //     .then((data) => {
    //       console.log(data);
    //       if (data.access_token) {
    //         cookies.set("token", data.access_token);
    //       }
    //       //async / await
    //       // else {
    //       //   navigate("/");
    //       // }
  };

  // useEffect(() => {
  //   if (!location.search) return;
  //   getKakaoToken();
  // }, []);

  const getNaverToken = () => {};

  return (
    <>
      <div>KakaoLogin</div>
      <button onClick={() => getKakaoToken()}>토큰</button>
    </>
  );
};

export default KakaoLogin;

import { useLocation } from "react-router-dom";

export const NAVER_CLIENT_ID = "hg20J4aMf0KW0dQ4mFcU";
export const NAVER_REDIRECT_URI = "/auth/naver/callback";
export const NAVER_CLIENT_SECRET = "TIaRVqiVvM";

// const { naver } = window;
// const location = useLocation();
// const NAVER_CALLBACK_URL = "NAVER_CALLBACK_URL 넣어주세요.";
// const NAVER_CLIENT_ID = "클라이언트 ID";

// const initializeNaverLogin = () => {
//   const naverLogin = new naver.LoginWithNaverId({
//     clientId: NAVER_CLIENT_ID,
//     callbackUrl: NAVER_CALLBACK_URL,
//     isPopup: false,
//     loginButton: { color: "white", type: 1, height: "47" },
//   });
//   naverLogin.init();
// };

// const getNaverToken = () => {
//   if (!location.hash) return;
//   const token = location.hash.split("=")[1].split("&")[0];
//   console.log(token);
// };

// useEffect(() => {
//   initializeNaverLogin();
//   getNaverToken();
// }, []);

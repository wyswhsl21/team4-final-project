////src/Redux/Modules/Instance.js
import axios from 'axios';

import { memoizedRefreshToken } from './../Recoil/Modules/refreshToken';

//instance 불러 쓸 때 브라우저쪽에 headers 일일이 안 넣어줘도 되지만,
//axios로 따로 써줄 경우는 header 매번 넣어줘야 함.
//인스턴스 - api 전역관리

const yhURL = process.env.REACT_APP_TH_S_HOST;
const token = localStorage.getItem('token');

//일반데이터 Instance
export const instance = axios.create({
  baseURL: `${yhURL}`,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
//폼데이터 Instance
export const instanceF = axios.create({
  baseURL: `${yhURL}`,
  headers: {
    'Content-Type': 'multipart/form-data',
    Authorization: `Bearer ${token}`,
  },
});

export const api = axios.create({
  baseURL: 'https://kauth.kakao.com',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
  },
});
export const trainApi2 = {
  //signup
  postProficForm: (payload) => instanceF.post('/user', payload),
  postProfile: (Id, payload) => instanceF.post(`/user/upload/${Id}`, payload),
  chattingForm: (name, formData) => instanceF.post(`/images`, formData),
  deleteProfile: (Id, deleteUrl) =>
    instance.delete(`user/images/${Id}`, { data: { url: deleteUrl } }),
  patchProfile: (Id, otherimage, primaryimage) =>
    instance.patch(`user/images/${Id}`, [primaryimage, otherimage]),
  editProfile: (Id, nickname, introduction) =>
    instance.post(`user/edit/${Id}`, { nickname, introduction }),
};

export const trainApi = {
  kakaoLogin: (code) =>
    axios.post(`${yhURL}/social/oauth/callback`, {
      authorizationCode: code,
    }),
  naverLogin: (code, state) =>
    axios.post(`${yhURL}/social/nauth/callback`, {
      authorizationCode: code,

      state: state,
    }),
  googleLogin: (code) =>
    axios.post(`${yhURL}/social/gauth/callback`, {
      authorizationCode: code,
    }),
  postName: (payload) => instance.post('/', payload),
  withdraw: (id, reason, password) =>
    instance.delete(`/user/${id}`, {
      data: { reason: reason, password: password },
    }),
  postProfile: (userId, payload) =>
    instance.patch(`/user/edit/${userId}`, payload),
  authEmail: (email) => instance.post(`/user/email`, email),
  checkEmail: (email) => instance.post(`/user/checkid`, email),
  authId: (email) => instance.post(`/user/checkid`, email),
  duplicationNickname: (nickname) =>
    instance.post(`/user/checknickname`, nickname),
  authCode: (payload) => instance.post(`/user/authcode`, payload),
  getMatch: (userId) => instance.get(`/list/matched/${userId}`),
  getInfinite: (cursor) => instance.get(`list/matched/${cursor}`),
  getConvers: (userId) => instance.get(`/user/${userId}`),
  getStation: (keyword) => instance.get(`list/station/${keyword}`),
  postSubSign: (payload) => instance.post('/user/signup', payload),
  postUserId: (payload) => instance.post('/user/checkid', payload),
  postSignIn: (payload) => instance.post('/user/login', payload),
  resetPw: (payload) => instance.post('/user/resetpw', payload),
  patchreputation: (Id, payload) =>
    instance.patch(`/user/reputation/${Id}`, payload),
  patchnickname: (id, payload) => instance.patch(`/user/edit/${id}`, payload),
  applychatrequset: (payload) => instance.patch('/user/chatstatus', payload),
  patchPw: (id, password, newPassword) =>
    instance.patch(`/user/pw/${id}`, {
      password: password,
      newpassword: newPassword,
    }),
  getalarm: (id) => instance.get(`/notice/alarm/${id}`),
  getalarmcursor: (next) => instance.get(`/notice/alarm/${next}`),
  patchalarm: (id) => instance.patch(`/notice/alarm/check/${id}`),
  postNotice: (title, description, tag) =>
    instance.post(`/notice`, {
      title: title,
      description: description,
      tag: tag,
    }),
  getNotice: () => instance.get(`/notice`),
  getDescription: (Id) => instance.get(`/notice/${Id}`),
  deleteAnnounce: (Id) => instance.delete(`/notice/${Id}`),
  blockuser: (Id, userId) =>
    instance.post(`/user/block/${Id}`, { block_user: userId }),
  reportuser: (Id, userId, title) =>
    instance.post(`/report`, {
      reporter: Id,
      reported: userId,
      description: title,
    }),
  getchatlist: (roomkey) => instance.get(`/list/chat/${roomkey}`),
};
// 인터셉터
instance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('token');

    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };
    }
    return config;
  },
  (error) => Promise.reject(error)
);

instanceF.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('token');

    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };
    }
    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const config = error.config;
    if (error.response.status === 401 && !config?.sent) {
      config.sent = true;
      const result = await memoizedRefreshToken();

      if (result) {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${result?.acctoken}`,
        };
      } else {
        window.location.href = '/';
      }
      return instance(config);
    }
    return Promise.reject(error);
  }
);

instanceF.interceptors.response.use(
  (response) => response,
  async (error) => {
    const config = error.config;
    if (error.response.status === 401 && !config?.sent) {
      config.sent = true;
      const result = await memoizedRefreshToken();

      if (result) {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${result?.acctoken}`,
        };
      } else {
        window.location.href = '/';
      }
      return instance(config);
    }
    return Promise.reject(error);
  }
);

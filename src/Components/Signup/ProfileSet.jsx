import React from "react";
import styled from "styled-components";
import progress from "../../Assets/SetProfile/nextprogress.svg";
import hello from "../../Assets/SetProfile/hello.gif";
import nextbutton from "../../Assets/SetProfile/nextbutton.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import avatar from "../../Assets/SetProfile/avatar.svg";
import { useRef } from "react";
const ProfileSet = () => {
  const fileref = useRef();
  const navigate = useNavigate();

  const startbuttonHandler = () => {
    navigate("/setprofile");
  };

  //   파일 업로드 핸들러
  const fileuploadHandler = () => {
    fileref.current.click();
  };

  return (
    <Wrap>
      <GifBox>
        <ProgressImg src={progress} alt="progress" />

        <SpanBox>
          <Profile>
            <Transfercitizen>환승시민</Transfercitizen>에서 사용하실
            <br />
            프로필을 설정해주세요.
          </Profile>
        </SpanBox>
        <Avatar onClick={fileuploadHandler} src={avatar} alt="avatar" />
        <input ref={fileref} type="file" />
      </GifBox>
      <GenderBox></GenderBox>
      <NextButton onClick={startbuttonHandler} src={nextbutton} alt="nextimg" />
      <NextSpan>시작</NextSpan>
    </Wrap>
  );
};

export default ProfileSet;

const Wrap = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const GifBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 147px;
  height: 235px;
  margin-top: 92px;
`;
const ProgressImg = styled.img`
  width: 26px;
  height: 8px;
  margin-top: 10px;
`;
const SpanBox = styled.div`
  margin-top: 45px;
  width: 134px;
  height: 82px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Avatar = styled.img`
  cursor: pointer;
  margin-top: 29px;
  width: 100px;
  height: 100px;
`;
const Profile = styled.span`
  width: 147px;
  height: 53px;
  font-size: 15px;
  font-weight: 400;
  margin-top: 20px;
  text-align: center;
`;
const Transfercitizen = styled.span`
  font-weight: 500;
  font-size: 17px;
`;
const GenderBox = styled.div`
  margin-top: 39px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 300px;
  height: 140px;
  gap: 20px;
`;
const GenderButton = styled.button`
  position: relative;
  width: 300px;
  height: 60px;
  border: 1px solid #d6d6d6;
  display: flex;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
  &.active {
    color: #ffffff;
    background-color: #fa3a45;
  }
`;
const Activeinput = styled.input`
  position: absolute;
  right: 20px;

  width: 20px;
  height: 20px;
  vertical-align: middle;
  appearance: none;
  background-color: #ffffff;
  border: max(2px, 0.1em) solid #cfcfcf;
  border-radius: 50%;

  &::before {
    content: "";
    display: block;
    width: 12px;
    height: 12px;
    margin: 2px;
    background-color: #cfcfcf;
    border-radius: 50%;
  }
  &.active {
    width: 20px;
    height: 20px;
    vertical-align: middle;
    appearance: none;
    background-color: #ffffff;
    border: max(2px, 0.1em) solid #ffffff;
    border-radius: 50%;

    &::before {
      content: "";
      display: block;
      width: 12px;
      height: 12px;
      margin: 2px;
      background-color: #fa3a45;
      border-radius: 50%;
    }
  }
`;

const GenderSpan = styled.span`
  margin-left: 20px;
`;

const NextButton = styled.img`
  margin-top: 131px;
  cursor: pointer;
`;
const NextSpan = styled.span`
  margin-top: 10px;
`;

import React from "react";
import { Wrap } from "../Login/EmailPage";
import Header from "../../Components/Header/Header";
import Agree from "../../Components/Signup/Agree";
const AgreePage = () => {
  return (
    <Wrap>
      <Header msg={"회원가입 약관 및 개인정보 수집 동의"} margin="auto" />
      <Agree />
    </Wrap>
  );
};

export default AgreePage;

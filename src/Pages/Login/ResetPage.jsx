import React from "react";
import { Wrap } from "./EmailPage";
import Header from "../../Components/Header/Header";
import Resetpw from "./../../Components/Login/Resetpw";

const ResetPage = () => {
  return (
    <Wrap>
      <Header msg={""} margin="63px" />
      <Resetpw />
    </Wrap>
  );
};

export default ResetPage;

import React from "react";
import GuideIcon from "../../Element/GuideIcon";
import styled from "styled-components";

const CustomerNotice = () => {
  return (
    <Wrap>
      <TitleBox>
        <div>
          <p>고객 이용가이드</p>
        </div>
      </TitleBox>
      <GuideIcon />
    </Wrap>
  );
};
export default CustomerNotice;

const Wrap = styled.div`
  @media only screen and (max-width: 375px) {
    width: 110px;
    height: 30px;
  }
`;

const TitleBox = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  div {
    width: 114px;
    height: 44px;
    border: 2px solid #71c9dd;
    border-radius: 30px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

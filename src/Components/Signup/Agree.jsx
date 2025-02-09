import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Accordion from '../../MyTools/Accordion';
import { useNavigate } from 'react-router-dom';
import { vector } from '../../Assets/Checkbox/Vector.png';
import { useRecoilState } from 'recoil';
import { useAgreeState } from '../../Recoil/userList';

const Agree = () => {
  const [agreepi, setAgreepi] = useRecoilState(useAgreeState);
  const navigate = useNavigate();
  const allRef = useRef();
  const checkbox1 = useRef();
  const checkbox2 = useRef();
  const checkbox3 = useRef();
  const checkbox4 = useRef();
  const [complete, setComplete] = useState(false);

  const handleCheckboxChange = () => {
    const isChecked =
      checkbox1.current.checked &&
      checkbox2.current.checked &&
      checkbox3.current.checked &&
      checkbox4.current.checked;

    setAgreepi(isChecked);

    // 개별 체크박스의 상태를 변경할 때, 전체 선택 체크박스의 상태도 함께 업데이트
    if (isChecked) {
      allRef.current.checked = true;
      setComplete(true);
    } else {
      allRef.current.checked = false;
      setComplete(false);
    }
  };

  const handleAllCheckboxChange = () => {
    const isChecked = allRef.current.checked;
    checkbox1.current.checked = isChecked;
    checkbox2.current.checked = isChecked;
    checkbox3.current.checked = isChecked;
    checkbox4.current.checked = isChecked;
    setAgreepi(isChecked);
    setComplete(isChecked);
  };
  

  const nextHandler = () => {
    if (agreepi === true) {
      navigate('/signup');
    } else {
      window.alert('개인정보 수집에 모두 동의해주세요');
    }
  };

  const contents = <p></p>;
  return (
    <Wrap>
      <AgreeBox>
        <CheckLabel for="checkboxall">
          <AllInput
            ref={allRef}
            onClick={handleAllCheckboxChange}
            type="checkbox"
            id="checkboxall"
            onChange={handleAllCheckboxChange}
          ></AllInput>
          <Span>모두 동의</Span>
        </CheckLabel>
        <AgreeLabel for="checkbox1">
          <Input
            ref={checkbox1}
            type="checkbox"
            id="checkbox1"
            onChange={handleCheckboxChange}
          ></Input>
          <Label for="checkbox1">이용 약관(필수)</Label>
          <a
            href="https://grizzly-topaz-b36.notion.site/310bfe9713d944e7b59870b2d833deaf?pvs=4"
            target="_blank"
          >
            보기
          </a>
        </AgreeLabel>

        <AgreeLabel for="checkbox2">
          <Input
            ref={checkbox2}
            type="checkbox"
            id="checkbox2"
            onChange={handleCheckboxChange}
          ></Input>
          <Label for="checkbox2">개인정보 수집 및 이용 동의 (필수)</Label>
          <a
            href="https://grizzly-topaz-b36.notion.site/391da1db78f74c7da9f6a9f0a252cfe7?pvs=4"
            target="_blank"
          >
            보기
          </a>
        </AgreeLabel>
        <AgreeLabel for="checkbox3">
          <Input
            ref={checkbox3}
            type="checkbox"
            id="checkbox3"
            onChange={handleCheckboxChange}
          ></Input>
          <Label for="checkbox3">만 14세 이상입니다. (필수)</Label>
        </AgreeLabel>
        <AgreeLabel for="checkbox4">
          <Input
            ref={checkbox4}
            type="checkbox"
            id="checkbox4"
            onChange={handleCheckboxChange}
          ></Input>
          <Label for="checkbox4">위치이용기반 서비스 동의 (필수)</Label>
          <a
            href="https://grizzly-topaz-b36.notion.site/5bf8fd32fd9f476e8afb94101a2a57aa?pvs=4"
            target="_blank"
          >
            보기
          </a>
        </AgreeLabel>
      </AgreeBox>
      <LoginButton
        className={agreepi && complete && 'active'}
        onClick={nextHandler}
      >
        다음
      </LoginButton>
    </Wrap>
  );
};

export default Agree;
const Wrap = styled.div`
  margin-top: 98px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const AgreeBox = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
  width: 343px;
  height: 230px;
`;
const AllInput = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  width: 25px;
  height: 25px;
  border-radius: 100%;
  cursor: pointer;
  background-image: url("data:image/svg+xml,%3Csvg width='27' height='27' viewBox='0 0 27 27' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.5 26C20.4036 26 26 20.4036 26 13.5C26 6.59644 20.4036 1 13.5 1C6.59644 1 1 6.59644 1 13.5C1 20.4036 6.59644 26 13.5 26Z' stroke='%23B3B3B3' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M7.26074 13.6442L11.4346 17.8181L19.7822 9.4704' stroke='%23B3B3B3' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
  background-size: 100% 100%;
  background-position: 50%;
  background-repeat: no-repeat;
  background-color: #ffffff;

  &:checked {
    content: '';
    background-image: url("data:image/svg+xml,%3Csvg width='27' height='27' viewBox='0 0 27 27' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.5 26C20.4036 26 26 20.4036 26 13.5C26 6.59644 20.4036 1 13.5 1C6.59644 1 1 6.59644 1 13.5C1 20.4036 6.59644 26 13.5 26Z' stroke='%23FA3A45' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M7.26074 13.6442L11.4346 17.8181L19.7822 9.4704' stroke='%23FA3A45' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #ffffff;
    transition: 0.2s ease;
  }
`;
const Input = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  width: 25px;
  height: 25px;
  cursor: pointer;
  border-radius: 100%;

  background-image: url("data:image/svg+xml,%3Csvg width='27' height='27' viewBox='0 0 27 27' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.5 26C20.4036 26 26 20.4036 26 13.5C26 6.59644 20.4036 1 13.5 1C6.59644 1 1 6.59644 1 13.5C1 20.4036 6.59644 26 13.5 26Z' stroke='%23B3B3B3' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M7.26074 13.6442L11.4346 17.8181L19.7822 9.4704' stroke='%23B3B3B3' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
  background-size: 100% 100%;
  background-position: 50%;
  background-repeat: no-repeat;
  background-color: #ffffff;
  &:checked {
    content: '';
    background-image: url("data:image/svg+xml,%3Csvg width='27' height='27' viewBox='0 0 27 27' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.5 26C20.4036 26 26 20.4036 26 13.5C26 6.59644 20.4036 1 13.5 1C6.59644 1 1 6.59644 1 13.5C1 20.4036 6.59644 26 13.5 26Z' stroke='%23FA3A45' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M7.26074 13.6442L11.4346 17.8181L19.7822 9.4704' stroke='%23FA3A45' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #ffffff;
    transition: 0.2s ease;
  }
`;
const AgreeLabel = styled.div`
  gap: 10px;
  width: 343px;
  height: 50px;
  display: flex;
  text-align: center;
  align-items: center;
`;
const CheckLabel = styled.label`
  gap: 10px;
  width: 343px;
  height: 50px;
  display: flex;
  text-align: center;
  align-items: center;
  border-bottom: 1px solid #f5f5f5;
`;
const Label = styled.label`
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
  }
  &::after {
  }
  &:not(:checked) + &::after {
    transform: scale(0);
    opacity: 0;
  }
  &:checked + &::after {
    transform: rotate(-35deg) scale(1);
    opacity: 1;
  }
`;

const LoginButton = styled.button`
  margin-top: 30px;
  width: 343px;
  height: 50px;
  color: #ffffff;
  background-color: rgba(250, 58, 69, 0.3);
  &.active {
    background-color: #fa3a45;
  }
`;
const Span = styled.span`
  color: #4d4d4d;
  font-family: Pretendard;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
`;

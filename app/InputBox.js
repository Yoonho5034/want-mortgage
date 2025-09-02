"use client";
import react from "react";

const InputBox = ({ title, subTitle, stateValue, setStateValue }) => {
  // title - 제목
  // subtle - 단위
  // stateValue - 입력값
  // setStateValue - 수정값
  const handler = (event) => {
    setStateValue(event?.target?.value);
  };
  return (
    <div className="mb-3">
      <div>{title}</div>
      <input
        className="text-right mt-1"
        placeholder={stateValue}
        type="number"
        onChange={handler}
      />
      <span className="ml-2 text-xs ">{subTitle}</span>
    </div>
  );
};

export default InputBox;

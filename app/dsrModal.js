"use client";

import React from "react";
const dsrModal = ({ dsrModalHandler }) => {
  const Content = [
    {
      value: "refund",
      title: "DSR 이란?",
      content: (
        <div className="text-stone-500">
          <p>
            채무자가
            <span className="font-bold text-lg text-orange-400 ml-1">원금</span>
            과
            <span className="font-bold text-lg text-orange-400 ml-1">이자</span>
            를 상환할 수 있는 능력이 있는지 평가하는 지표!
          </p>
          <div className="font-bold">
            <p>
              은행의 경우
              <span className="font-bold text-lg mx-1">DSR 40%</span>
              이내
            </p>
            <p>
              보험사의 경우
              <span className="font-bold text-lg  mx-1">DSR 50%</span>
              이내
            </p>
          </div>
          <p></p>
        </div>
      ),
    },
  ];
  return (
    <div>
      <div
        className="bg-black opacity-40 fixed top-0 left-0 w-screen h-screen mobile:hidden"
        onClick={dsrModalHandler()}
      />
      <div className="bg-white fixed w-180 h-90 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-y-auto px-6 py-6 rounded-md mobile:w-full mobile:max-h-screen">
        <div className="flex items-center justify-between">
          <p className="text-xl font-bold text-stone-600">
            {Content?.[0]?.title}
          </p>
          <button onClick={dsrModalHandler()}>X</button>
        </div>
        <div className="bg-gray-100 w-full h-auto rounded-lg mt-4 px-4 py-2">
          {Content?.[0]?.content}
        </div>
        <div className="mt-4 text-stone-600 text-lg">
          <p className="text-xl font-bold text-stone-600 mb-2">한화생명은?</p>
          <p>
            <span className="font-bold mr-1">원금균등 상환 방식으로</span>
            <span className="font-bold text-orange-400 mx-1">최대 DSR 50%</span>
            <span className="font-bold mr-1">가능!</span>
            <span className="text-sm font-bold">
              (타사대비 높은 한도로 진행가능)
            </span>
          </p>
          <p className="font-bold">최대 한도에 유리합니다!</p>
        </div>
      </div>
    </div>
  );
};

export default dsrModal;

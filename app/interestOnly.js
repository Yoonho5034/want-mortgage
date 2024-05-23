"use client";

import React from "react";
const refundModal = ({ interestOnlyModalHandler }) => {
  const Content = [
    {
      value: "refund",
      title: "거치기간이란?",
      content: (
        <div className="text-stone-500">
          <p>
            일정기간 동안 원금상환 없이
            <span className="font-bold text-lg text-orange-400 mx-1">
              이자만 상환
            </span>
            할 수 있는 기간을 의미!
          </p>
          <div className="font-bold">
            <p>
              주택을 매입할 경우,
              <span className="font-bold text-lg text-orange-400 mx-1">
                전 금융권
              </span>
              거치기간 최대 5년!
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
        className="bg-black opacity-40 fixed top-0 left-0 w-screen h-screen"
        onClick={interestOnlyModalHandler()}
      />
      <div className="bg-white fixed w-180 h-90 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-y-auto px-6 py-6 rounded-md mobile:w-full mobile:max-h-screen">
        <div className="flex items-center justify-between">
          <p className="text-xl font-bold text-stone-600">
            {Content?.[0]?.title}
          </p>
          <button onClick={interestOnlyModalHandler()}>X</button>
        </div>
        <div className="bg-gray-100 w-full h-auto rounded-lg mt-4 px-4 py-2">
          {Content?.[0]?.content}
        </div>
        <div className="mt-4 text-stone-600 text-lg">
          <p className="text-xl font-bold text-stone-600 mb-2">한화생명은?</p>
          <p>
            잔금대출도
            <span className="font-bold text-orange-400 mx-1">1년 이상</span>
            <span className="font-bold mr-1">거치기간 설정 가능!</span>
            {/* <span className="text-sm font-bold">(원금선납 거치 방식)</span> */}
          </p>
          <p className="font-bold">장기 거치에 유리합니다!</p>
        </div>
      </div>
    </div>
  );
};

export default refundModal;

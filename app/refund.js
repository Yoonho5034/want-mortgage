"use client";

import React from "react";
const refundModal = ({ refundModalHandler }) => {
  const Content = [
    {
      value: "refund",
      title: "중도상환수수료란?",
      content: (
        <div className="text-stone-500">
          <p>
            대출실행일 기준{" "}
            <span className="font-bold text-lg text-orange-400 mr-1">
              3년 이내
            </span>
            대출원금을 상환할 때 발생되는 비용!
          </p>
          <div className="font-bold">
            <p>상환시점이 빠르고,</p>
            <p>중도상환 수수료율이 높고,</p>
            <p>
              중도상환 면제비율이 낮을수록,
              <span className="font-bold text-lg text-orange-400 mx-1">
                더 많은
              </span>
              <span className="font-medium">비용이 발생하게 됩니다!</span>
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
        onClick={refundModalHandler()}
      />
      <div className="bg-white fixed w-180 h-90 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-y-auto px-6 py-6 rounded-md mobile:w-full mobile:max-h-screen">
        <div className="flex items-center justify-between">
          <p className="text-xl font-bold text-stone-600">
            {Content?.[0]?.title}
          </p>
          <button onClick={refundModalHandler()}>X</button>
        </div>
        <div className="bg-gray-100 w-full h-auto rounded-lg mt-4 px-4 py-2">
          {Content?.[0]?.content}
        </div>
        <div className="mt-4 text-stone-600 text-lg">
          <p className="text-xl font-bold text-stone-600 mb-2">한화생명은?</p>
          <p>
            <span className="font-bold text-orange-400">
              대출원금의 50%까지
            </span>
            , 3년 이내에 상환해도 수수료 미발생!
            <span className="text-sm font-bold">
              (중도상환수수료 면제비율 50%)
            </span>
          </p>
          <p>
            <span>3년 이내 50% 초과하는 금액은, </span>
            <span className="font-bold text-orange-400 mr-1">
              1.3% 수수료율 적용
            </span>
            <span className="text-sm font-bold">
              (변동금리 상품기준, 일할차감 적용)
            </span>
          </p>
          <p className="font-bold">단기상환 시 유리합니다!</p>
        </div>
      </div>
    </div>
  );
};

export default refundModal;

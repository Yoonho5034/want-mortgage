"use client";

import react from "react";
import React from "react";
const modal = ({ modalHandler }) => {
  const typeArray = [
    { title: "카드사용", id: 0, type: "card" },
    { title: "건보료", id: 1, type: "insurance" },
  ];

  return (
    <div>
      <div
        className="bg-black opacity-40 fixed top-0 left-0 w-screen h-screen  "
        onClick={modalHandler}
      />
      <div className="bg-stone-200 fixed w-160 max-h-80 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-y-auto px-6 py-6 rounded-md mobile:w-4/5 mobile:max-h-screen ">
        <div className="flex justify-between">
          {typeArray.map(({ title, id, type }) => {
            const [money, setMoney] = react.useState(0);
            const inputChange = (e) => {
              if (type === "card") {
                setMoney(
                  Math.min(
                    5000,
                    Number(((e?.target?.value / 0.4042) * 0.9).toFixed(0))
                  )
                );
                return;
              }
              setMoney(
                Math.min(
                  5000,
                  Number(
                    (((e?.target?.value * 12) / 0.03545) * 0.95).toFixed(0)
                  )
                )
              );
            };

            return (
              <div key={id}>
                <div className="font-bold mb-2">{title}</div>
                <div>
                  <input
                    className="text-right mobile:w-24"
                    onChange={inputChange}
                  />
                  <div className="mt-2 font-bold text-xs mobile:hidden">
                    환산소득
                    <span className="text-lg text-orange-500 ml-2 mr-1">
                      {money}
                    </span>
                    만원
                  </div>
                  <div className="hidden mt-2 font-bold text-xs mobile:block">
                  환산
                    <span className="text-lg text-orange-500 ml-2 mr-1">
                      {money}
                    </span>
                    만원
                  </div>
                </div>
              </div>
            );
          })}

          <div>
            <button className="font-bold text-stone-400" onClick={modalHandler}>
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default modal;

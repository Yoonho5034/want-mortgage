"use client";

import classNames from "classnames";
import react from "react";
import React from "react";

const MPR = ({ setMoney, setPreiod, setRate, preiod, etcRate }) => {
  const moneyHandler = (event) => {
    setMoney(event?.target?.value);
  };
  const preiodHandler = (event) => {
    setPreiod(event?.target?.value);
  };
  const rateHandler = (event) => {
    setRate(event?.target?.value);
  };
  return (
    <div className="flex gap-4 mt-4 ">
      <div>
        <input className="text-right mr-1" onChange={moneyHandler} />
        <span className="text-xs"> 만 원</span>
      </div>
      <div>
        <input
          className="max-w-10 text-right mr-1"
          placeholder={preiod}
          onChange={preiodHandler}
        />
        <span className="text-xs">개월</span>
      </div>
      <div>
        <input
          className="max-w-14 text-right mr-1"
          onChange={rateHandler}
          placeholder={etcRate}
        />
        <span className="text-xs"> %</span>
      </div>
    </div>
  );
};

export default MPR;

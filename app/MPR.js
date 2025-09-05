"use client";

import react from "react";
import React from "react";

const MPR = ({ data, setData, etcLoans, calcLoanPI }) => {
  // react.useEffect(() => {
  //   etcLoans?.map(({ id, loan, preiod, rate, PI }) => {
  //     calcLoanPI(loan, rate, preiod, id);
  //   });
  // }, [data]);

  return (
    <div className="flex gap-4 mt-4 ">
      <div>
        <input
          type="number"
          className="text-right mr-1 mobile:w-16"
          onChange={(e) => {
            const value = Number(e.target.value); // 입력값을 숫자로 변환
            setData((prev) => {
              const newData = [...prev];
              newData[data?.id] = { ...newData[data?.id], loan: value };
              return newData;
            });
          }}
        />
        <span className="text-xs"> 만 원</span>
      </div>
      <div>
        <input
          className="max-w-12 text-right mr-1 mobile:w-10"
          type="number"
          placeholder={data?.preiod}
          onChange={(e) => {
            const value = Number(e.target.value); // 입력값을 숫자로 변환
            setData((prev) => {
              const newData = [...prev];
              newData[data?.id] = { ...newData[data?.id], preiod: value };
              return newData;
            });
          }}
        />
        <span className="text-xs">개월</span>
      </div>
      <div>
        <input
          className="max-w-14 text-right mr-1 mobile:w-14"
          type="number"
          onChange={(e) => {
            const value = Number(e.target.value); // 입력값을 숫자로 변환
            setData((prev) => {
              const newData = [...prev];
              newData[data?.id] = { ...newData[data?.id], rate: value };
              return newData;
            });
          }}
          placeholder={data?.rate}
        />
        <span className="text-xs"> %</span>
      </div>
    </div>
  );
};

export default MPR;

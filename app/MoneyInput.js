import react from "react";
import React, { useState } from "react";

const MoneyInput = ({ setMoney }) => {
  const [isOpen, setIsOpen] = react.useState(false);
  const openHandler = () => {
    setIsOpen((prev) => !prev);
  };
  const [inputValue, setInputValue] = useState("");
  const [convertedValue, setConvertedValue] = useState("");

  // 숫자/단위를 분리해서 각각 스타일링하기 위한 헬퍼
  const splitParts = (str) => {
    if (!str) return [];
    // ()로 캡처해서 "숫자 그룹"도 결과에 포함되도록
    // 숫자(콤마 포함)와 그 외(한글/공백/기호)를 분리
    const tokens = str.split(/(\d[\d,]*)/g).filter(Boolean);
    return tokens.map((t) => ({
      text: t,
      type: /\d/.test(t) ? "number" : "unit",
    }));
  };

  const numberToKorean = (number) => {
    const inputNumber = number < 0 ? false : number;
    const unitWords = ["만 원", "억 "];
    const splitUnit = 10000;
    const splitCount = unitWords.length;
    let resultArray = [];
    let resultString = "";

    for (let i = 0; i < splitCount; i++) {
      const unitResult = Math.floor(
        (inputNumber % Math.pow(splitUnit, i + 1)) / Math.pow(splitUnit, i)
      );
      if (unitResult > 0) {
        resultArray[i] = unitResult;
      }
    }

    for (let i = 0; i < resultArray.length; i++) {
      if (!resultArray[i]) continue;
      resultString =
        resultArray[i].toLocaleString() + unitWords[i] + resultString;
    }
    return resultString;
  };

  const handleChange = (e) => {
    const value = e.target.value.replace(/,/g, "");
    setMoney(value);
    const number = parseInt(value, 10);

    if (!isNaN(number)) {
      const formattedValue = number.toLocaleString();
      setInputValue(formattedValue);
      setConvertedValue(numberToKorean(number));
    } else {
      setInputValue("");
      setConvertedValue("");
    }
  };

  return (
    <div className="font-bold text-xl text-blue-500 ">
      {!isOpen ? (
        <input
          placeholder="10000"
          className="w-full text-right"
          value={inputValue}
          onChange={handleChange}
          onBlur={openHandler}
        />
      ) : (
        <button
          className="cursor-pointer w-full text-left "
          onClick={openHandler}
        >
          <p className="w-full text-right">
            {convertedValue
              ? // 🔽 숫자/단위 각각 스타일 분리 렌더
                splitParts(convertedValue).map((part, i) => (
                  <span
                    key={i}
                    className={
                      part.type === "number"
                        ? "text-2xl text-blue-500 align-baseline"
                        : "text-sm text-blue-500 align-baseline"
                    }
                  >
                    {part.text}
                  </span>
                ))
              : "금액입력"}
          </p>
        </button>
      )}
    </div>
  );
};

export default MoneyInput;

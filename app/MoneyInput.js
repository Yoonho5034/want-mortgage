import react from "react";
import React, { useState } from "react";

const MoneyInput = ({ setMoney }) => {
  const [isOpen, setIsOpen] = react.useState(false);
  const openHandler = () => {
    setIsOpen((prev) => !prev);
  };
  const [inputValue, setInputValue] = useState("");
  const [convertedValue, setConvertedValue] = useState("");

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
      // Add commas to the number and then append the unit word.
      resultString =
        resultArray[i].toLocaleString() + unitWords[i] + resultString;
    }
    return resultString;
  };

  const handleChange = (e) => {
    const value = e.target.value.replace(/,/g, ""); // Remove existing commas for
    setMoney(value);
    const number = parseInt(value, 10);

    if (!isNaN(number)) {
      const formattedValue = number.toLocaleString(); // Format the number with commas
      setInputValue(formattedValue); // Update input value with commas
      setConvertedValue(numberToKorean(number)); // Update the converted value
    } else {
      setInputValue(""); // Clear the input if it's not a valid number
      setConvertedValue("");
    }
  };

  return (
    <div className="font-bold text-xl text-blue-500">
      {!isOpen ? (
        <input
          placeholder="10000"
          className="w-full"
          value={inputValue}
          onChange={handleChange}
          onBlur={openHandler}
        />
      ) : (
        <button
          className="cursor-pointer w-full text-left"
          onClick={openHandler}
        >
          {}
          <p className="w-full">
            {convertedValue ? convertedValue : "금액입력"}
          </p>
        </button>
      )}
    </div>
  );
};

export default MoneyInput;

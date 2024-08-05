"use client";

import react from "react";

const Option = ({ condition, selected }) => {
  const [isClick, setIsClick] = react.useState(true);
  const clickHandler = (prev) => {
    setIsClick((prev) => !prev);
  };
  react.useEffect(() => {
    setIsClick(true);
  }, [selected]);
  return (
    <button
      className={`flex mb-1 ${isClick ? "text-blue-500" : ""}`}
      onClick={clickHandler}
    >
      <li className="flex items-center">
        <span className="mr-1">
          <img
            src={`${isClick ? "./check.png" : "./unCheck.png"}`}
            className="w-2"
          />
        </span>
        <span>{condition}</span>
      </li>
    </button>
  );
};

export default Option;

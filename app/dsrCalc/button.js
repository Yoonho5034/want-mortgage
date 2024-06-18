import React from "react";
import classNames from "classnames";

const button = ({ title, onClick, isClick, box }) => {
  return (
    <div
      className={classNames(
        "border-2 border-gray-300 w-full text-center rounded-full ",
        {
          "bg-orange-300": isClick, // 배경색을 바꾸는 클래스
          "rounded-none": box,
        }
      )}
      onClick={onClick}
    >
      {title}
    </div>
  );
};

export default button;

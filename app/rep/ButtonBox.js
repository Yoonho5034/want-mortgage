import react from "react";

const ButtonBox = ({ item }) => {
  const [isClick, setIsClick] = react.useState(false);
  const clickHandler = () => {
    setIsClick((prev) => !prev);
  };
  return (
    <button
      onClick={clickHandler}
      className={`rounded-md px-1  ${
        isClick ? "bg-blue-200 text-blue-600 font-bold" : "bg-slate-100"
      }`}
    >
      {item}
    </button>
  );
};

export default ButtonBox;

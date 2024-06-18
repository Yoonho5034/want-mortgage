"use client";
import react from "react";
import Button from "./button";

const page = () => {
  const [Kb, setKb] = react.useState(null);
  const handleChange = (event) => {
    setKb(event?.target?.value);
  };
  const [Type, setType] = react.useState(null);
  const TypeArray = [
    { title: "매매", value: "buy" },
    { title: "자담", value: "my" },
  ];

  const [Ltv, setLtv] = react.useState(null);
  const LtvArray = [
    { value: 80, title: "80%" },
    { value: 70, title: "70%" },
    { value: 60, title: "60%" },
    { value: 50, title: "50%" },
    { value: 40, title: "40%" },
    { value: 30, title: "30%" },
  ];

  const [FirstType, setFirstType] = react.useState("not");
  const [moneyBank, setMoenyBank] = react.useState(null);
  const handleMoneyBank = (event) => {
    setMoenyBank(event?.target?.value);
  };
  const [peopleMoney, setPeopleMoney] = react.useState(null);
  const handlePeopleMoney = (event) => {
    setPeopleMoney(event?.target?.value);
  };
  const First = [
    { value: "not", title: "없음" },
    { value: "money", title: "금융사" },
    { value: "people", title: "세입자" },
  ];

  const [BondRate, setBondRate] = react.useState(100);
  const BondRateArray = [
    {
      value: 100,
      title: "채권",
    },
    {
      value: 110,
      title: "110%",
    },
    {
      value: 120,
      title: "120%",
    },
  ];

  const [PeopleLiving, setPeopleLiving] = react.useState();
  const [monthPeopleMoney, setMonthPeopleMoney] = react.useState();

  const PeopleLivingType = [
    { value: "year", title: "전세" },
    { value: "month", title: "월세" },
  ];

  const [monthPay, setMonthPay] = react.useState();
  const MonthPayArray = [
    { value: 5500, title: "5,500만원" },
    { value: 4800, title: "4,800만원" },
    { value: 2800, title: "2,800만원" },
    { value: 2500, title: "2,500만원" },
  ];

  const [roomCount, setRoomCount] = react.useState();
  const RoomCountArray = [
    { value: 1, title: "1개" },
    { value: 2, title: "2개" },
    { value: 3, title: "3개" },
    { value: 4, title: "4개" },
  ];
  return (
    <div className="m-4">
      <div className="flex justify-between">
        <div>
          <p>ltv 한도</p>
          {(Kb * Ltv) / 100}
        </div>
        {FirstType === "money" && (
          <div>
            <p>후순위 한도</p>
            {(Kb * Ltv) / 100 - (moneyBank * BondRate) / 100}
          </div>
        )}
        {FirstType === "people" && (
          <div>
            <p>후순위 한도</p>
            {(Kb * Ltv) / 100 -
              ((PeopleLiving === "year" && peopleMoney) -
                (PeopleLiving === "month" &&
                  (monthPay * roomCount > peopleMoney
                    ? -(monthPay * roomCount)
                    : -peopleMoney)))}
            {/* {(Kb * Ltv) / 100 - if(PeopleLiving==="year"){peopleMoney}} */}
          </div>
        )}
      </div>

      {/* type */}
      <div className="flex justify-between gap-2">
        {TypeArray.map(({ title, value }) => {
          const onClick = () => {
            setType(value);
          };
          const isClick = Type === value;
          return <Button title={title} onClick={onClick} isClick={isClick} />;
        })}
      </div>
      <div>
        <p>주택시세</p>
        <input
          placeholder="KB시세"
          className=" text-right"
          type="number"
          value={Kb}
          onChange={handleChange}
        />
      </div>
      {/* ltv */}
      <div>
        <p>적용 LTV</p>
        <div className="flex gap-2">
          {LtvArray?.map(({ title, value }) => {
            const onClick = () => {
              setLtv(value);
            };
            const isClick = Ltv === value;
            return <Button title={title} onClick={onClick} isClick={isClick} />;
          })}
        </div>
      </div>
      {/* 선순위 */}
      <div>
        <p>선순위</p>
        <div className="flex gap-2">
          {First?.map(({ value, title }) => {
            const onClick = () => {
              setFirstType(value);
            };
            const isClick = FirstType === value;
            return <Button title={title} onClick={onClick} isClick={isClick} />;
          })}
        </div>
        {FirstType === "money" && (
          <div className="flex justify-between">
            <div>
              <input
                placeholder="금액"
                onChange={handleMoneyBank}
                value={moneyBank}
              />
            </div>
            <div className="flex w-1/3">
              {BondRateArray?.map(({ title, value }) => {
                const isClick = BondRate === value;
                const onClick = () => {
                  setBondRate(value);
                };
                return (
                  <Button
                    title={title}
                    box
                    isClick={isClick}
                    onClick={onClick}
                  />
                );
              })}
            </div>
          </div>
        )}
        {FirstType === "people" && (
          <div>
            <div className="flex justify-between">
              <div>
                <input
                  placeholder="보증금"
                  onChange={handlePeopleMoney}
                  value={peopleMoney}
                />
              </div>
              <div className="flex w-1/3">
                {PeopleLivingType?.map(({ title, value }) => {
                  const isClick = PeopleLiving === value;
                  const onClick = () => {
                    setPeopleLiving(value);
                  };
                  return (
                    <Button
                      title={title}
                      box
                      isClick={isClick}
                      onClick={onClick}
                    />
                  );
                })}
              </div>
            </div>
            {PeopleLiving === "month" && (
              <div>
                <p>소액임차보증금</p>
                <div className="flex gap-1">
                  {MonthPayArray?.map(({ title, value }) => {
                    const isClick = monthPay === value;
                    const onClick = () => {
                      setMonthPay(value);
                    };
                    return (
                      <Button
                        title={title}
                        isClick={isClick}
                        onClick={onClick}
                      />
                    );
                  })}
                </div>
                <p>방 갯수</p>
                <div className="flex gap-1">
                  {RoomCountArray?.map(({ title, value }) => {
                    const isClick = roomCount === value;
                    const onClick = () => {
                      setRoomCount(value);
                    };
                    return (
                      <Button
                        title={title}
                        isClick={isClick}
                        onClick={onClick}
                      />
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      <div>
        <p>실행조건</p>
        <input placeholder="실행금액" />
        <input placeholder="실행금리" />
      </div>
      <div className="bg-gray-100">
        <p>채무자</p>
        <div>
          <span>소득</span>
          <input placeholder="연봉" />
        </div>
        <div>
          <span>신용부채</span>
          <div className="flex justify-between">
            <input placeholder="부채" className="w-1/3" />
            <input placeholder="금리(%)" className="w-1/4" />
            <input placeholder="상환기간(개월)" className="w-1/4" />
          </div>
        </div>
        <div>
          <span>담보대출</span>
          <div className="flex justify-between">
            <input placeholder="부채" className="w-1/3" />
            <input placeholder="금리(%)" className="w-1/4" />
            <input placeholder="상환기간(개월)" className="w-1/4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

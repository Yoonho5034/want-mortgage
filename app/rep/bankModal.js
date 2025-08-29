"use client";

import React from "react";

const bankModal = ({
  bankArray,
  selected,
  setSelected,
  modalHandler,
  JsbankArray,
}) => {
  return (
    <div>
      <div
        className="bg-black opacity-40 fixed top-0 left-0 w-screen h-screen cursor-pointer"
        onClick={modalHandler}
      />
      <div className="bg-white fixed w-160 max-h-80 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-y-auto px-6 py-6 rounded-md mobile:w-full mobile:max-h-screen">
        <div className="flex justify-between">
          <div className="font-bold mb-4">담보대출</div>
          <div>
            <button className="font-bold text-stone-400" onClick={modalHandler}>
              X
            </button>
          </div>
        </div>
        {selected}
        <div className="grid grid-cols-5">
          {bankArray?.map((bank, i) => {
            const selectBank = () => {
              setSelected(bank);
              modalHandler();
              return;
            };
            return (
              <sapn className="text-sm mb-2" key={i}>
                <button onClick={selectBank}>{bank?.bankName}</button>
              </sapn>
            );
          })}
        </div>
        <div className="font-bold my-4">전세대출</div>
        <div>
          <div className="grid grid-cols-5">
            {JsbankArray?.map((bank, i) => {
              const selectBank = () => {
                setSelected(bank);
                modalHandler();
                return;
              };
              return (
                <sapn className="text-sm mb-2" key={i}>
                  <button onClick={selectBank}>{bank?.bankName}</button>
                </sapn>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default bankModal;

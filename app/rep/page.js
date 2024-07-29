"use client";

const page = () => {
  const BankArray = [{ bankName: "국민은행" }];
  return (
    <div className="w-screen h-screen bg-slate-400 flex justify-center font-sans">
      <div className="bg-white flex gap-x-2">
        <div className="bg-red-200">1</div>
        <div>
          <div>
            <div className="font-bold">BNK부산은행</div>
            <div className="flex text-xs gap-1 1 text-stone-400">
              <div className="rounded-md bg-slate-200 px-">1년거치</div>
              <div className="rounded-md bg-slate-200 px-1">DSR 40%</div>
              <div className="rounded-md bg-slate-200 px-1">40년 상환</div>
            </div>
            <div className="mt-3">
              <p className="text-xs text-stone-500">내금리</p>
              <p className="font-bold text-xl text-blue-500">3.31%</p>
            </div>
            <div className="mt-3">
              <p className="text-xs text-stone-500">내 대출한도</p>
              <p className="font-bold text-xl text-blue-500">4억 368만원</p>
            </div>
            <div className="mt-4">
              <div className="font-semibold">부수거래</div>
              <div>
                <ul className="text-xs text-stone-300">
                  <li className="flex items-center">
                    <span className="mr-1">
                      <img src="./unCheck.png" className="w-2" />
                    </span>
                    <span>급여이체</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-1">
                      <img src="./check.png" className="w-2" />
                    </span>
                    <span className="text-blue-500">급여이체</span>
                  </li>
                  <li>
                    <span>v</span>
                    <span>신용카드사용</span>
                  </li>
                  <li>
                    <span>v</span>
                    <span>공과금자동이체</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

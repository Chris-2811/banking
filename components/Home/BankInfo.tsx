import React from "react";

function BankInfo() {
  return (
    <div className="flex justify-between rounded-lg bg-blue-200 px-6 py-5">
      <div className="flex gap-[1.125rem]">
        <div className="grid h-10 w-10 place-items-center rounded-full bg-blue-400 font-medium text-white">
          CB
        </div>
        <div>
          <h3 className="text-xl font-semibold leading-[1.2] text-blue-600">
            Chase Bank
          </h3>
          <div className="mt-2 text-lg font-semibold leading-[1.1] text-blue-400">
            $2,650.20
          </div>
        </div>
      </div>
      <div>savings</div>
    </div>
  );
}

export default BankInfo;

import React from "react";
import Image from "next/image";
import BankCard from "../shared/BankCard";

function RightSideBar() {
  const firstName = "Chris";
  const banks = ["Bank of America", "Chase", "Wells Fargo"];

  return (
    <section className="hidden max-h-screen w-[400px] flex-col border-l pb-8 xl:flex">
      <div className="min-h-[120px] w-full">
        <img src="/icons/gradient-mesh.svg" alt="" />
      </div>
      <div className="relative px-6">
        <div className="shadow-profile absolute -top-8 grid h-[96px] w-[96px] place-items-center rounded-full border-8 border-white bg-gray-200 p-2">
          <span className="text-4xl font-bold text-blue-500">
            {firstName[0]}
          </span>
        </div>
        <div className="pt-[5.5rem]">
          <h2 className="heading-md">Chris Schmid</h2>
          <p className="mt-1">chris@gmail.com</p>
          <div className="mt-8 flex items-center justify-between">
            <h4 className="heading-sm">My Banks</h4>
            <div className="flex items-center gap-2">
              <img src="/icons/plus.svg" alt="plus" width={20} height={20} />
              <p className="font-semibold">Add Bank</p>
            </div>
          </div>
        </div>
        <div className="mt-6">
          {banks.length > 0 && (
            <div className="relative">
              <div className="relative z-10">
                <BankCard />
              </div>
              {banks[1] && (
                <div className="absolute left-12 top-10 w-[302px]">
                  <div className="relative">
                    <BankCard />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default RightSideBar;

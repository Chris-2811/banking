import React from "react";
import Link from "next/link";

function BankCard() {
  return (
    <div className="flex w-full flex-col">
      <Link
        href="/"
        className="bg-bank-gradient shadow-creditCard relative flex h-[190px] max-w-[320px] overflow-hidden rounded-[20px] backdrop-blur-[6px]"
      >
        <div className="relative flex size-full max-w-[228px] flex-col justify-between rounded-l-[20px] bg-gray-600 px-4 pb-4 pt-5">
          <h2 className="pl-1 font-semibold text-white">Christoph Schmid</h2>
          <div className="font-manrope">
            <div className="flex items-center justify-between text-xs uppercase">
              <p className="text-white">Christoph Schmid</p>
              <p className="text-white">06/24</p>
            </div>
            <p className="mt-2 font-semibold tracking-[2.4px] text-white">
              1234 1234 1234 1234
            </p>
          </div>
        </div>
        <div className="bg-gradient-mesh flex h-full flex-1 flex-col items-end justify-between bg-cover bg-no-repeat">
          <img
            src="/icons/Paypass.svg"
            alt=""
            width={20}
            height={24}
            className="mr-5 mt-5"
          />
          <img
            src="/icons/Visa.svg"
            alt=""
            width={45}
            height={32}
            className="mb-4 mr-4"
          />
        </div>
      </Link>
    </div>
  );
}

export default BankCard;

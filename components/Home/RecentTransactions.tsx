"use client";

import React from "react";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import BankInfo from "./BankInfo";
const banks = ["Chase Bank", "Bank of America", "Deutsche Bank"];

function RecentTransactions() {
  const [isActive, setIsActive] = useState<string>(banks[0]);

  function handleTabChange(e: React.MouseEvent<HTMLLIElement>) {
    setIsActive(e.currentTarget.id);
  }

  return (
    <section>
      <div className="flex justify-between">
        <h2 className="heading-md">Recent transactions</h2>
        <Link
          href="/transaction-history"
          className="grid h-10 place-items-center rounded-lg border px-4 text-sm font-semibold leading-[1.42] text-gray-600"
        >
          View all
        </Link>
      </div>
      <ul className="mb-8 mt-[1.875rem] flex items-center gap-6 border-b border-b-gray-200 font-semibold leading-[1.25] text-gray-400">
        {banks.map((bank, index) => (
          <li
            key={index}
            id={bank}
            className={`h-8 cursor-pointer ${isActive === bank ? "border-b-[3px] border-b-blue-300 text-blue-300" : ""}`}
            onClick={handleTabChange}
          >
            {bank}
          </li>
        ))}
      </ul>
      <BankInfo />
    </section>
  );
}

export default RecentTransactions;

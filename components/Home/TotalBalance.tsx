import React from "react";
import { formatAmount } from "@/lib/utils";
import AnimatedCounter from "../shared/AnimatedCounter";
import { Doughnut } from "react-chartjs-2";
import DoughnutChart from "./DoughnutChart";

function TotalBalance({
  accounts = [],
  totalBanks,
  totalCurrentBalance,
}: TotlaBalanceBoxProps) {
  return (
    <section className="my-8 flex items-start justify-between rounded-xl border border-gray-200 p-6">
      <div className="flex items-center gap-6">
        <div className="h-[120px] w-[120px]">
          <DoughnutChart accounts={accounts} />
        </div>

        <div>
          <h4 className="text-base font-semibold">
            {totalBanks} Bank {totalBanks > 1 ? "Accounts" : "Account"}
          </h4>
          <p className="mb-2 mt-6 text-sm leading-[1.42]">
            Total Current Balance
          </p>
          <div className="heading-lg">
            <AnimatedCounter amount={totalCurrentBalance} />
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <img src="/icons/plus.svg" alt="plus" className="mr-2" />
        <p className="font-semibold leading-[1.42] text-blue-300">Add bank</p>
      </div>
    </section>
  );
}

export default TotalBalance;

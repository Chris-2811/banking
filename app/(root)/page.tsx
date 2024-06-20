import React from "react";
import Heading from "@/components/shared/Heading";
import TotalBalance from "@/components/Home/TotalBalance";
import RecentTransactions from "@/components/Home/RecentTransactions";
import RightSideBar from "@/components/Home/RightSideBar";

function Home() {
  return (
    <div className="flex w-full">
      <div className="w-full overflow-hidden px-4 py-8 md:flex-1 md:px-10 lg:px-8 lg:py-12">
        <div className="max-w-full">
          <header>
            <Heading
              title="Welcome,"
              type="greeting"
              subtext="Access & manage your account and transactions efficiently."
            />
            <TotalBalance
              accounts={[]}
              totalBanks={2}
              totalCurrentBalance={2655.64}
            />
          </header>
          <RecentTransactions />
        </div>
      </div>

      <RightSideBar />
    </div>
  );
}

export default Home;

import React from "react";
import MobileNav from "./MobileNav";

function Topbar() {
  return (
    <section className="lg:hidden">
      <div className="flex w-full items-center justify-between px-4 py-5 shadow-lg md:px-10">
        <div className="flex items-center gap-1">
          <img src="/icons/logo.svg" alt="company-logo" />
          <h1 className="ml-1 font-ibm-plex text-2xl font-bold text-black-100">
            Horizon
          </h1>
        </div>
        <MobileNav />
      </div>
    </section>
  );
}

export default Topbar;

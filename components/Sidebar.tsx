"use client";

import React from "react";
import Link from "next/link";
import { sidebarLinks } from "@/data";
import { usePathname } from "next/navigation";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { logOut } from "@/lib/actions/user.actions";
import { log } from "console";
import { useRouter } from "next/navigation";

function Sidebar({ user }) {
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    await logOut();
    router.push("/sign-in");
  }

  console.log(user);

  return (
    <section id="sidebar" className="hidden lg:block">
      <div className="flex h-full flex-col justify-between border-r px-4 py-8 lg:w-[280px]">
        <div>
          <Link href="/" className="flex items-center gap-1">
            <Image
              src="/icons/logo.svg"
              alt="company-logo"
              width={34}
              height={34}
            />
            <p className="font-ibm-plex text-[1.75rem] font-bold leading-[1.07]">
              Horizon
            </p>
          </Link>
          <form>
            <div className="form-control relative">
              <Input className="my-6 pl-[2.625rem]" placeholder="Search" />
              <img
                src="/icons/search.svg"
                alt="search"
                className="absolute left-[0.875rem] top-1/2 -translate-y-1/2 transform"
              />
            </div>
          </form>
          <nav aria-label="primary-navigation">
            <ul role="list" className="space-y-4">
              {sidebarLinks.map((link) => {
                const isActive = pathname === link.route;
                return (
                  <li key={link.label}>
                    <Link
                      href={link.route}
                      className={`flex gap-3 px-3 py-4 font-semibold ${
                        isActive
                          ? "rounded-md bg-nav-gradient text-white"
                          : "text-gray-600"
                      }`}
                    >
                      <img
                        src={link.imgURL}
                        alt={link.label}
                        className={`${isActive && "invert-white"}`}
                      />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <div className="flex items-center border-t pt-6">
          <img src="icons/jsm.svg" alt="" className="mr-3" />
          <div className="mr-4 text-sm">
            <p className="font-semibold leading-[1.42]">Christoph Schmid</p>
            <p>chris@gmail.com</p>
          </div>
          <img
            src="icons/logout.svg"
            alt="logout"
            onClick={handleLogout}
            className="cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
}

export default Sidebar;

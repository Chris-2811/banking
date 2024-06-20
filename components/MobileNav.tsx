"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "@/data";
import { usePathname } from "next/navigation";

function MobileNav() {
  const pathname = usePathname();
  return (
    <section className="max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src="icons/hamburger.svg"
            alt="mobile-menu"
            width={30}
            height={30}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent className="border-none bg-white" side="left">
          <Link href="/" className="mb-6 mt-2 flex items-center gap-1">
            <Image
              src="/icons/logo.svg"
              width={34}
              height={34}
              alt="company-logo"
            />
            <h1 className="ml-1 font-ibm-plex text-2xl font-bold text-black-100">
              Horizon
            </h1>
          </Link>
          <nav className="mt-14 max-w-60">
            {sidebarLinks.map((link) => {
              const isActive = pathname === link.route;
              return (
                <SheetClose asChild key={link.route}>
                  <Link
                    href={link.route}
                    className={`flex items-center gap-3 px-3 py-4 text-sm font-semibold ${
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
                </SheetClose>
              );
            })}
          </nav>
        </SheetContent>
      </Sheet>
    </section>
  );
}

export default MobileNav;

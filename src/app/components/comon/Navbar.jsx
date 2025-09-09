"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { FiPhoneCall } from "react-icons/fi";
import { Montserrat } from "next/font/google";
import { IoMdClose } from "react-icons/io";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

import HumbergerButton from "../elements/humbergerButton";

export default function Navbar({ isLight = false }) {
  const [open, setOpen] = useState(false);

  const navList = [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "/#About" },
    { label: "SERVICES", href: "/#Service" },
    { label: "CONTACT", href: "/contact" },
  ];

  return (
    <nav
      className={`absolute top-0 left-0 z-50 ${
        isLight ? "bg-dark" : "bg-transparent"
      } w-full h-30 p-4 px-2 lg:px-20 flex justify-between items-center`}
    >
      <Link href="/">
        <Image
          src="/images/repairman-logo.png"
          alt="Repairman Logo"
          width={100}
          height={24}
          className="hover:scale-110 transition-all duration-300 cursor-pointer"
        />
      </Link>

      <HumbergerButton open={open} setOpen={setOpen} />

      {/* Nav List (satu saja) */}
      <div
        className={`flex-col md:flex-row md:flex items-start p-10 pl-15  gap-4 absolute z-10 md:static top-0 left-0 w-full md:w-auto h-screen md:h-full  bg-white md:bg-transparent transition-all duration-300 ${
          open ? "flex" : "hidden"
        }`}
      >
        <ul className="flex flex-col md:flex-row items-start md:items-center gap-4 py-4 md:py-0">
          {navList.map((item, index) => (
            <li key={index}>
              <a
                href={`${item.href}`}
                onClick={() => setOpen(false)}
                className="text-dark md:text-white text-lg md:text-sm hover:text-primary transition-all duration-300 ease-in-out"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 text-dark md:text-white pb-4 md:pb-0">
          <FiPhoneCall />
          <span>0123 456 7890</span>
        </div>
      </div>
    </nav>
  );
}

"use client";

import { useEffect, useState } from "react";
import { MdOutlineCompareArrows } from "react-icons/md";

export default function DetailTask({ detail, setDetail }) {
  const [open, setOpen] = useState(false);
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    if (detail) {
      setFilled(true);
    } else {
      setFilled(false);
    }
  }, [detail]);

  return (
    <div
      className={`overflow-hidden transition-all duration-500 ease-in-out flex flex-col bg-[#fff] border ${
        filled ? "border-green-500" : "border-gray-400"
      }
             ${open ? "h-[300px]" : "h-[70px]"} 
`}
    >
      <header className="w-full h-[70px] flex justify-between items-center p-5">
        {/* Header */}
        <h1 className="text-xl font-semibold">Detail of Your Task</h1>
        <MdOutlineCompareArrows
          className="text-3xl text-gray-500 rotate-90 cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      </header>

      {/* Content */}
      <div
        className={`flex flex-col gap-5 p-5 transition-opacity duration-500 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      >
        <textarea
          type="text"
          placeholder="Describe your task"
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
          className="w-full h-[180px] text-lg outline-none text-start"
        />
      </div>
    </div>
  );
}

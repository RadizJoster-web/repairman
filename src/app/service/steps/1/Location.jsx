"use client";

import { useEffect, useState } from "react";
import { MdOutlineCompareArrows } from "react-icons/md";

export default function Location({
  location,
  setLocation,
  houseNumber,
  setHouseNumber,
}) {
  const [open, setOpen] = useState(false);
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    if (location && houseNumber) {
      setFilled(true);
    } else {
      setFilled(false);
    }
  }, [location, houseNumber]);

  return (
    <div
      className={`overflow-hidden transition-all duration-500 ease-in-out flex flex-col bg-[#fff] border ${
        filled ? "border-green-500" : "border-gray-400"
      }
             ${open ? "h-[250px]" : "h-[70px]"} 
`}
    >
      <header className="w-full h-[70px] flex justify-between items-center p-5">
        {/* Header */}
        <h1 className="text-xl font-semibold">Your Task Location</h1>
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
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter your location"
          className="w-full border px-4 py-3 text-lg focus:outline-primary"
        />
        <input
          type="number"
          value={houseNumber}
          onChange={(e) => setHouseNumber(e.target.value)}
          placeholder="Enter House/Company Number"
          className="w-full border px-4 py-3 text-lg focus:outline-primary"
        />
      </div>
    </div>
  );
}

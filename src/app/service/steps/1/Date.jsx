"use client";

import { useEffect, useState } from "react";
import { MdOutlineCompareArrows } from "react-icons/md";

const dateOptions = [
  {
    id: "today",
    label: "Today",
    value: "today",
  },
  {
    id: "within3days",
    label: "Within 3 Days",
    value: "Within 3 Days",
  },
  {
    id: "withinWeek",
    label: "Within A Week",
    value: "Within A Week",
  },
  {
    id: "chooseDates",
    label: "Custom Dates",
    value: "chooseDates",
  },
];

export default function DateFilter({ selectedDate, setSelectedDate }) {
  const [open, setOpen] = useState(false);
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    if (selectedDate) {
      setFilled(true);
    } else {
      setFilled(false);
    }
  }, [selectedDate]);

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
        <h1 className="text-xl font-semibold">Set Your Schedule</h1>
        <MdOutlineCompareArrows
          className="text-3xl text-gray-500 rotate-90 cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      </header>

      {/* Content */}
      <div className="flex flex-col gap-2 px-5">
        {dateOptions.map((opt) => (
          <label
            key={opt.id}
            htmlFor={opt.id}
            className="flex font-semibold gap-2"
          >
            <input
              type="radio"
              id={opt.id}
              name="dateOption"
              value={opt.value}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
            <span>{opt.label}</span>
          </label>
        ))}

        {/* If chooseDates selected */}
        {selectedDate === "chooseDates" && (
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-3">
            <p className="font-medium">Pick a custom range:</p>
            <div className="flex gap-2">
              <input
                type="date"
                className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary/50 outline-none"
              />
              <span className="self-center">-</span>
              <input
                type="date"
                className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary/50 outline-none"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { MdOutlineCompareArrows } from "react-icons/md";
import { FiSun, FiSunrise, FiSunset, FiMoon } from "react-icons/fi";
const availableTime = [
  {
    id: "morning",
    type: "morning",
    label: "Morning",
    time: "08:00 - 11:00",
    icon: <FiSunrise className="w-4 h-4" />,
  },
  {
    id: "afternoon",
    type: "afternoon",
    label: "Afternoon",
    time: "12:00 - 15:00",
    icon: <FiSun className="w-4 h-4" />,
  },
  {
    id: "evening",
    type: "evening",
    label: "Evening",
    time: "16:00 - 19:00",
    icon: <FiSunset className="w-4 h-4" />,
  },
  {
    id: "night",
    type: "night",
    label: "Night",
    time: "20:00 - 23:00",
    icon: <FiMoon className="w-4 h-4" />,
  },
];

export default function SetTime({ time, setTime }) {
  const [open, setOpen] = useState(false);
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    if (time) {
      setFilled(true);
    } else {
      setFilled(false);
    }
  }, [time]);

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
        <h1 className="text-xl font-semibold">Set Time to Repairment</h1>
        <MdOutlineCompareArrows
          className="text-3xl text-gray-500 rotate-90 cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      </header>

      {/* Content */}
      <div className="flex flex-col gap-2 px-5">
        {availableTime.map((opt, index) => (
          <label
            key={opt.id}
            htmlFor={opt.id}
            className="flex font-semibold gap-2"
          >
            <input
              type="radio"
              id={opt.id}
              name="availableTime"
              value={opt.type}
              onChange={(e) => setTime(e.target.value)}
            />
            <span>
              {index + 1}. {opt.label}{" "}
              <span className="text-sm text-gray-500">({opt.time})</span>
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}

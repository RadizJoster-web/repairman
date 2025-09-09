"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { MdOutlineCompareArrows } from "react-icons/md";

export default function Location({ taskOption, setTaskOption, typeParams }) {
  // Get params type
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const [open, setOpen] = useState(false);
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    if (!typeParams) return;

    const fetchData = async () => {
      console.log("Fetching data...");
      try {
        const res = await fetch(`/api/getItemsService/${typeParams}`);
        const result = await res.json();
        setData(result.data);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        console.log("Data fetched complete.");
        setLoading(false);
      }
    };

    fetchData();
  }, [typeParams]);

  useEffect(() => {
    if (taskOption.stuff.length > 0) {
      setFilled(true);
    } else {
      setFilled(false);
    }
  }, [taskOption.stuff]);

  const handleCheckBox = (e) => {
    const value = e.target.value;
    const price = Number(e.target.dataset.price);

    if (e.target.checked) {
      setTaskOption((prev) => ({
        stuff: [...prev.stuff, value],
        price: prev.price + price,
      }));
    } else {
      setTaskOption((prev) => ({
        stuff: prev.stuff.filter((item) => item !== value),
        price: prev.price - price,
      }));
    }
  };

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
        <h1 className="text-xl font-semibold">Task Option</h1>
        <MdOutlineCompareArrows
          className="text-3xl text-gray-500 rotate-90 cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      </header>

      {/* Content */}
      <div
        className={`flex flex-col gap-2 p-5 transition-opacity duration-500 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      >
        {loading && <p>Loading...</p>}
        {data.map((category, index) => (
          <div key={index}>
            {category.items.map((task, i) => (
              <div
                key={i}
                className="flex items-center justify-start gap-2 mb-1"
              >
                <input
                  type="checkbox"
                  name="taskOption"
                  id={`${category.type}-${i}`}
                  value={task}
                  data-price={category.price}
                  onChange={(e) => handleCheckBox(e)}
                />
                <label
                  htmlFor={`${category.type}-${i}`}
                  className="font-semibold"
                >
                  {task} - {category.price}$
                </label>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

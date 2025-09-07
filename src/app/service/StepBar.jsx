"use client";

export default function StepBar({ step }) {
  return (
    <div className="w-screen mt-35 flex justify-center items-center px-2">
      <ul className="w-full md:w-auto h-20 flex justify-center items-center px-8 rounded-full border border-gray-400 shadow-xl">
        <li
          className={`w-10 h-10 flex justify-center items-center rounded-full border-2 border-primary ${
            step >= 1 ? "bg-primary" : ""
          }`}
        >
          <h1 className="text-dark font-bold">1</h1>
        </li>
        <span className="w-20 md:w-40 h-1 bg-primary"></span>
        <li
          className={`w-10 h-10 flex justify-center items-center rounded-full border-2 border-primary ${
            step >= 2 ? "bg-primary" : ""
          }`}
        >
          <h1 className="text-dark font-bold">2</h1>
        </li>
        <span className="w-20 md:w-40 h-1 bg-primary"></span>
        <li
          className={`w-10 h-10 flex justify-center items-center rounded-full border-2 border-primary ${
            step >= 3 ? "bg-primary" : ""
          }`}
        >
          <h1 className="text-dark font-bold">3</h1>
        </li>
      </ul>
    </div>
  );
}

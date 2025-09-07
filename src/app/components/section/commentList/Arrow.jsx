import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Arrow({ scroll }) {
  return (
    <div className="hidden md:flex w-full gap-1 justify-center md:justify-end">
      <button
        onClick={() => scroll("left")}
        className="p-3 hover:bg-lighter-dark rounded-full"
      >
        <FaArrowLeft />
      </button>

      <button
        onClick={() => scroll("right")}
        className="p-3 hover:bg-lighter-dark rounded-full"
      >
        <FaArrowRight />
      </button>
    </div>
  );
}

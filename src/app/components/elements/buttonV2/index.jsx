export default function ButtonV2({ onClick, text }) {
  return (
    <button
      onClick={onClick}
      className="py-3 px-12 font-semibold text-dark border border-gray-400 bg-[#fff] hover:brightness-80 transition cursor-pointer"
    >
      {text}
    </button>
  );
}

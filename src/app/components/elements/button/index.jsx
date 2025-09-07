export default function Button({ onClick, text, small = false }) {
  return (
    <button
      onClick={onClick}
      className={`${
        small ? "py-2 px-6" : "py-3 px-12"
      } border-1 border-white font-semibold text-dark bg-primary hover:brightness-80 transition cursor-pointer`}
    >
      {text}
    </button>
  );
}

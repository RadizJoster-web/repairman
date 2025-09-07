import "./burgerButton.css";

export default function HumbergerButton({ open, setOpen }) {
  const handleClick = () => {
    setOpen(!open);
    console.log(open);
  };

  return (
    <label className="burger block md:hidden">
      {/* input dikontrol oleh state */}
      <input type="checkbox" checked={open} onChange={handleClick} />
      <span></span>
      <span></span>
      <span></span>
    </label>
  );
}

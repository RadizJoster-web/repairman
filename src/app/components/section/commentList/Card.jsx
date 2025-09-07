export default function Card({ name, date, comment }) {
  return (
    <li className="relative min-w-full xl:min-w-200 max-h-full flex flex-col items-center md:items-start gap-5 pb-6">
      <header className="w-full flex flex-col md:flex-row justify-between items-center ">
        <h1 className="font-bold text-based md:text-2xl font-montserrat text-primary">
          {name}
        </h1>
        <p className="text-gray-400 text-sm">{date}</p>
      </header>

      <p className="text-white leading-relaxed text-sm md:text-base text-center md:text-start">
        {comment}
      </p>

      <p className="absolute bottom-0 right-0 text-5xl text-primary font-bold">
        “
      </p>
    </li>
  );
}

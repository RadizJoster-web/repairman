"use client";

import Link from "next/link";
import Button from "../../elements/button";

export default function CardService({ type, price, items }) {
  return (
    <li className="my-card">
      <header className="text-center">
        <h1 className="font-semibold text-2xl pb-2">{type}</h1>
        <h2 className="text-xl">
          <span className="text-primary text-5xl font-bold">${price}</span>/
          Stuf
        </h2>
      </header>

      <ul className="list-disc list-inside flex flex-col">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <Link href={`/service?type=${type}`}>
        <Button small={true} text="Select Service" />
      </Link>
    </li>
  );
}

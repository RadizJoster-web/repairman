"use client";

import Link from "next/link";

import Beckground from "../components/section/hero/Beckground";
import TagLine from "../components/section/hero/TagLine";
import Button from "../components/elements/button";
import ButtonV2 from "../components/elements/buttonV2";

export default function Hero() {
  const handleBuntton = () => {
    alert("Thank to contact us!");
  };

  return (
    <section
      id="Hero"
      className="relative h-screen flex flex-col items-center justify-center gap-10 text-white px-4"
    >
      <Beckground />

      <TagLine />

      <div className="flex flex-col md:flex-row gap-2 md:gap-10 items-center">
        <Link href="/contact">
          <Button text="Contact Us" />
        </Link>

        <Link href="#About">
          <ButtonV2 text="Learn More" />
        </Link>
      </div>
    </section>
  );
}

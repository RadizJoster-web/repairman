"use client";

import Link from "next/link";

import Button from "../../elements/button";

export default function TagLine() {
  return (
    <div className="lg:max-w-xl space-y-6">
      <h2 className="text-center lg:text-start text-xl font-semibold font-montserrat text-primary">
        🛠️ About Us ⚒️
      </h2>

      <h1 className="text-center lg:text-start text-3xl md:text-5xl font-bold leading-snug font-montserrat">
        Restoring Functionality,{" "}
        <span className="text-primary my-stroke">One Repair</span> at a Time
      </h1>

      <p className="text-center lg:text-start text-lighter-dark">
        We specialize in bringing broken items back to life—whether it's
        electronics, appliances, or everyday tools. Our expert technicians
        combine precision and care to deliver reliable repair solutions that
        last.
      </p>

      {/* Stats */}
      <div className="flex justify-center lg:justify-start gap-8">
        <div>
          <h3 className="text-2xl font-bold text-primary">1000+</h3>
          <p className="text-gray-500">Items Repaired</p>
        </div>

        <span className="w-[2px] min-h-full bg-lighter-dark"></span>

        <div>
          <h3 className="text-2xl font-bold text-primary">500+</h3>
          <p className="text-gray-500">Satisfied Customers</p>
        </div>

        <span className="w-[2px] min-h-full bg-lighter-dark"></span>

        <div>
          <h3 className="text-2xl font-bold text-primary">98%</h3>
          <p className="text-gray-500">Service Satisfaction</p>
        </div>
      </div>

      {/* Signature */}
      <div className="pt-4 text-center lg:text-start ">
        <p className="font-signature text-xl">Repairman Services</p>
        <p className="text-gray-500 text-sm">
          Your Trusted Partner in Fixes That Matter
        </p>
      </div>

      <div className="text-center lg:text-start">
        <Link href="#Service">
          <Button text="Get Started" />
        </Link>
      </div>
    </div>
  );
}

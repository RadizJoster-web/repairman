import Link from "next/link";

import Button from "../../elements/button";

export default function QuestionForm() {
  return (
    <section className="w-full flex justify-center bg-gradient-to-r from-primary/90 to-primary/70 py-20">
      <div className="w-11/12 md:w-3/4 lg:w-2/3 bg-white rounded-2xl shadow-xl p-10 flex flex-col items-center text-center space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-dark">
          Have a Question? 🤔
        </h1>
        <p className="text-lighter-dark max-w-xl">
          We're here to help! Whether it’s about our services, pricing, or
          specific requests, feel free to reach out. Our team will get back to
          you as soon as possible.
        </p>

        <Link href="/contact" className="cursor-pointer">
          <Button text="Contact Us" />
        </Link>
      </div>
    </section>
  );
}

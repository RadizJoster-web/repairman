import { useEffect, useState } from "react";
import Link from "next/link";

import ButtonV2 from "../../../components/elements/buttonV2";

export default function Step3({ step }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (step === 3) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [step]);

  return (
    <div
      className={`${
        step === 3 ? "flex" : "hidden"
      } w-full flex-col items-center justify-center min-h-[300px]`}
    >
      {loading ? (
        // Loading spinner
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-500 font-medium">
            Processing your request...
          </p>
        </div>
      ) : (
        // Thank you message
        <div className="flex flex-col items-center text-center animate-fadeIn">
          <h1 className="text-3xl font-bold font-montserrat text-primary">
            🎉 Thank You!
          </h1>
          <p className="mt-3 text-lg text-gray-700 max-w-md">
            We truly appreciate your trust in choosing our repairman service.
            Your order has been received and our team will assist you shortly.
          </p>
          <Link href="/" className="flex items-center mt-5">
            <ButtonV2 text="Return Home" />
          </Link>
        </div>
      )}
    </div>
  );
}

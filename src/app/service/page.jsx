"use client";

import { useState } from "react";

import Navbar from "@/app/components/comon/Navbar";
import Footer from "@/app/components/comon/Footer";
import StepBar from "./StepBar";
import Step1 from "./steps/1";
import Step2 from "./steps/2";
import Step3 from "./steps/3";

import Button from "@/app/components/elements/button";
import ButtonV2 from "../components/elements/buttonV2";

export default function DescribeTask() {
  // Step Bar
  const [step, setStep] = useState(1);

  // Step 1
  const [location, setLocation] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [taskOption, setTaskOption] = useState({ stuff: [], price: 0 });
  const [detail, setDetail] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [time, setTime] = useState("");
  const [error, setError] = useState("");

  // Step 2
  // Step 3

  // Mext Step
  const handleNextStep = () => {
    const requiredFields = [
      location,
      houseNumber,
      taskOption,
      detail,
      selectedDate,
      time,
    ];

    // Check if all required fields are filled
    if (requiredFields.some((field) => !field)) {
      setError("Please fill in all required fields.");
      return;
    } else {
      setError("");
    }

    if (step < 3) {
      setStep(step + 1);
    } else {
      setStep(step);
    }
  };

  // Back Step
  const handleBackStep = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      setStep(step);
    }
  };

  return (
    <section className="w-full overflow-x-hidden">
      <Navbar isLight={true} />
      <StepBar step={step} />

      {/* Content */}
      <div className="w-full flex px-2 py-20 md:p-20">
        {/* Step 1 */}
        <Step1
          {...{
            step,
            location,
            setLocation,
            houseNumber,
            setHouseNumber,
            taskOption,
            setTaskOption,
            detail,
            setDetail,
            selectedDate,
            setSelectedDate,
            time,
            setTime,
          }}
        />

        {/* Step 2 */}
        <Step2
          {...{
            step,
            location,
            houseNumber,
            taskOption,
            detail,
            selectedDate,
            time,
          }}
        />

        {/* Step 3 */}
        <Step3 {...{ step }} />
      </div>

      <div className="w-full flex justify-center mb-5 ">
        <p className={`${error ? "text-red-500" : "hidden"}`}>{error}</p>
      </div>

      {step < 3 && (
        <div className="w-full flex justify-between md:justify-end gap-5 px-2 md:px-20 pb-20">
          <ButtonV2 text="Beck" onClick={handleBackStep} />
          <Button text="Next" onClick={handleNextStep} />
        </div>
      )}

      <Footer />
    </section>
  );
}

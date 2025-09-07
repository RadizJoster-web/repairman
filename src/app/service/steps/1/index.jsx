import Location from ".//Location";
import TaskOption from "./TaskOption";
import DetailTask from "./DetailTask";
import Date from "./Date";
import SetTime from "./SetTime";

export default function Step1({
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
}) {
  return (
    <div className={`${step === 1 ? "flex" : "hidden"} w-full flex flex-col`}>
      <h1 className="text-3xl font-semibold font-montserrat pb-5">
        Describe your task
      </h1>

      <div className="w-full flex flex-col gap-5">
        {/* Location */}
        <Location {...{ location, setLocation, houseNumber, setHouseNumber }} />
        {/* Task Option */}
        <TaskOption {...{ taskOption, setTaskOption }} />
        {/* Detail Task */}
        <DetailTask {...{ detail, setDetail }} />
        {/* Date */}
        <Date {...{ selectedDate, setSelectedDate }} />
        {/* Set Time */}
        <SetTime {...{ time, setTime }} />
      </div>
    </div>
  );
}

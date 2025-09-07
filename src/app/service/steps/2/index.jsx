export default function Step2({
  step,
  location,
  houseNumber,
  taskOption,
  detail,
  selectedDate,
  time,
  error,
}) {
  const orderData = [
    { label: "📍 Location", value: location },
    { label: "🏠 House / Company Number", value: houseNumber },
    {
      label: "🛠 Task",
      value: Array.isArray(taskOption.stuff)
        ? taskOption.stuff.map((item, i) => <div key={i}>- {item}</div>)
        : taskOption,
    },
    { label: "📝 Detail", value: detail },
    { label: "📅 Date", value: selectedDate },
    { label: "⏰ Time", value: time },
    { label: "💸 Price", value: `$${taskOption.price}` },
  ];

  return (
    <div className={`${step === 2 ? "flex" : "hidden"} w-full flex-col`}>
      <h1 className="text-3xl font-semibold font-montserrat pb-5">
        Order Confirmation
      </h1>

      {/* Confirmation Card */}
      <div className="flex flex-col gap-3 w-full bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
        {orderData.map(
          (item, i) =>
            item.value && (
              <div
                key={i}
                className="flex justify-between items-center border-b last:border-0 pb-2 last:pb-0"
              >
                <span className="font-medium text-gray-600">{item.label}</span>
                <span className="max-w-40 md:max-w-70 text-gray-800 text-end">
                  {item.value}
                </span>
              </div>
            )
        )}
      </div>

      {error && (
        <div className="mt-3 text-red-500 text-sm font-medium">⚠️ {error}</div>
      )}
    </div>
  );
}

import React, { useState } from "react";

function DateTimePicker() {
  const [dateTime, setDateTime] = useState("");

  const handleDateTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDateTime(event.target.value);
  };

  return (
    <input
      type="datetime-local"
      value={dateTime}
      onChange={handleDateTimeChange}
      className="border mb-4 p-2 rounded focus:outline-none focus:ring focus:border-blue-300 w-full sm:w-52 "
      required
    />
  );
}

export default DateTimePicker;

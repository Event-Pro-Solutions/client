import React, { useState, useRef, RefObject, useEffect } from "react";

interface DateTimePickerProps {
  onDateTimeChange: (dateTimeValue: string) => void;
}

const getToday = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");

  return `${year}-${month}-${day}T${hours}:${minutes}`;
};

function DateTimePicker({ onDateTimeChange }: DateTimePickerProps) {
  const [dateTime, setDateTime] = useState(getToday());
  const dateTimeInputRef: RefObject<HTMLInputElement> = useRef(null);

  const handleDateTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDateTime(event.target.value);
    onDateTimeChange(event.target.value);
    if (dateTimeInputRef.current) {
      dateTimeInputRef.current.blur();
    }
  };

  return (
    <input
      type="datetime-local"
      value={dateTime}
      onChange={handleDateTimeChange}
      ref={dateTimeInputRef}
      className="border mb-4 p-2 rounded focus:outline-none focus:ring focus:border-blue-300 w-full sm:w-52 "
      required
    />
  );
}

export default DateTimePicker;

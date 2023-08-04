import React, { useState, useRef, RefObject } from "react";

interface DateTimePickerProps {
  onDateTimeChange: (dateTimeValue: string) => void;
}

function DateTimePicker({ onDateTimeChange }: DateTimePickerProps) {
  const [dateTime, setDateTime] = useState("");
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

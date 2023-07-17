import dayjs, { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import { useState, useRef } from "react";
import "../../styles/TimePicker.css";

export function TimePicker(props: {
  label: string;
  time: dayjs.Dayjs;
  className: string;
  onChange: (newValue: Dayjs) => void;
  onAccept: () => void;
}) {
  const [value, setValue] = useState<Dayjs | null>(null);
  const timeInputRef = useRef() as React.Ref<HTMLInputElement>;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MobileTimePicker
        label={props.label}
        className={props.className}
        value={props.time}
        inputRef={timeInputRef}
        onChange={(newValue) => {
          if (newValue) {
            setValue(newValue);
            props.onChange(newValue);
          }
        }}
        onAccept={(newValue) => {
          if (newValue) {
            setValue(dayjs(newValue, "HH:MM:SS"));
            console.log(value);
            props.onAccept();
          }
        }}
        renderInput={(params) => (
          <TextField {...params} className="myDatePicker" />
        )}
      />
    </LocalizationProvider>
  );
}

export default TimePicker;

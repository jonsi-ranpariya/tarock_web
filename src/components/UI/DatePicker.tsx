import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";

export default function DatePicker(props: {
  label: string;
  date: dayjs.Dayjs;
  className: string;
  onChange: (newValue: Dayjs) => void;
  onAccept: () => void;
}) {
  const [value, setValue] = React.useState<Dayjs | null>(props.date);

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <MobileDatePicker
          label={props.label}
          className={props.className}
          value={props.date}
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
      </Stack>
    </LocalizationProvider>
  );
}

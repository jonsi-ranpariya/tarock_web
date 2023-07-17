import Calendar from "react-calendar";
import { ChangeEvent } from "react";
import "../../styles/Calendar.css";

import Modal from "../../layout/Modal";
import Button from "./Button";

const CalendarOutput = (props: {
  calendarClick: boolean;
  year: number;
  monthNumber: number;
  date: number;
  closeModalHandler: () => void;
  okClickHandler: () => void;
  calendarValueChangeHandler: (
    value: Date,
    event: ChangeEvent<HTMLInputElement>
  ) => void;
}) => {
  return (
    <Modal>
      <Calendar
        value={new Date(props.year, props.monthNumber, props.date)}
        onChange={props.calendarValueChangeHandler}
        className="bg-slate-700 rounded-lg  my-2"
      />
      <div className="flex place-content-center">
        <Button onClick={props.closeModalHandler} type="submit">
          Cancel
        </Button>
        <Button type="submit" onClick={props.okClickHandler}>
          Ok
        </Button>
      </div>
    </Modal>
  );
};

export default CalendarOutput;

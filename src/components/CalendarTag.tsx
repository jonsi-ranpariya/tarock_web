import CalendarLogo from "../assets/Calendar.svg";
const CalendarTag = (props: {
  onClick: () => void;
  date: number;
  monthName: string;
  year: number;
}) => {
  return (
    <span
      className="text-black cursor-pointer  flex items-center align-baseline mx-2"
      onClick={() => {
        props.onClick();
      }}
    >
      <img src={CalendarLogo} className=" w-6" alt="logo" />
      <span className="mx-2 text-sm">
        {props.date} {props.monthName}, {props.year}
      </span>
    </span>
  );
};

export default CalendarTag;

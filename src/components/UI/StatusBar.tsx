import { useRef, useState } from "react";
import Dropdown, { Option } from "react-dropdown";
import "react-dropdown/style.css";
import { useCrud } from "../../store/crud-context";
import "./../../styles/StatusBar.css";

const StatusBar = (props: { onChange: (statusType: Option) => void }) => {
  const { statusHandler } = useCrud();
  const [value, setValue] = useState<Option>();
  const options = ["All", "Active", "Inactive"];
  const defaultOption = "Status";
  const dropDownRef = useRef() as React.LegacyRef<Dropdown>;
  return (
    <Dropdown
      options={options}
      ref={dropDownRef}
      onChange={(newValue) => {
        newValue && setValue(newValue);
        props.onChange(newValue);
        statusHandler(newValue);
      }}
      value={defaultOption}
      placeholder="Select an option"
      className="w-80 text-md  lg:ml-3 font-semibold font-sans text-slate-400  my-3 lg:w-80 xs:w-full py-1  border rounded-lg dark:bg-black bg-transparent   ease-in focus:caret-slate-500 hover: "
    />
  );
};

export default StatusBar;

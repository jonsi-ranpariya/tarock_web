import { useState } from "react";
import Dropdown, { Option } from "react-dropdown";

import useSWR from "swr";
import { StateData } from "../../models/data";
import Label from "../UI/Label";

const StateDropdown = (props: {
  onChange: (stateid: string) => void;
  countryid: number;
  value: number;
}) => {
  const [value, setValue] = useState<Option>();
  const options: Option[] = [];

  const url = `https://interview-api.kodecreators.com/api/states?country_id=${props.countryid}`;
  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data, error, isLoading } = useSWR(url, fetcher);
  const stateData: StateData = data || [];
  stateData?.data?.map((item) =>
    options.push({ label: item.name, value: item.id.toString() })
  );

  const state = options.filter((item) => item.value === props.value.toString());

  const name = state.length ? state[0].value : "";

  //country change
  const stateChangeHandler = async (newValue: Option) => {
    const state = stateData?.data.filter(
      (item) => item.name === newValue.label
    );

    //state respective of country id
    let stateid = state?.map((item) => item.id).toString();
    console.log(stateid);
    props.onChange(stateid);
  };
  console.log(props.value);
  return (
    <div>
      <Label label="State" className="dark:text-mediumGray" />
      <Dropdown
        options={options}
        onChange={(newValue) => {
          newValue && setValue(newValue);
          stateChangeHandler(newValue);
        }}
        value={props.value === 0 ? "Select a state" : name}
        placeholder="Select a State"
        className="dark:bg-black dark:text-mediumGray text-md  my-3 font-semibold font-sans text-slate-700   md:w-11/12 xs:w-full py-1  border rounded-lg bg-blue-50 bg-transparent   ease-in focus:caret-slate-500 "
      />
    </div>
  );
};

export default StateDropdown;

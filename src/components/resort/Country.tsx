import { useEffect, useRef, useState } from "react";
import Dropdown, { Option } from "react-dropdown";
import Label from "../UI/Label";
import { Country, CountryData } from "../../models/data";
import { useAuth } from "../../store/auth-context";
import useSWR from "swr";

const CountryDropdown = (props: {
  onChange: (countryid: string) => void;
  value: number;
}) => {
  const [value, setValue] = useState<Option>();
  const options: string[] = [];
  const defaultOption = "Select a Country";
  const dropDownRef = useRef() as React.LegacyRef<Dropdown>;
  const url = "https://interview-api.kodecreators.com/api/countries";
  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data, error, isLoading } = useSWR(url, fetcher);
  const countryData: CountryData = data || [];
  countryData?.data &&
    countryData?.data?.map((item) => options.push(item.name));

  //country change
  const countryChangeHandler = async (newValue: Option) => {
    const country = countryData?.data.filter(
      (item) => item.name === newValue.label
    );

    //state respective of country id
    let countryid = country?.map((item) => item.id).toString();
    props.onChange(countryid);
  };
  return (
    <div>
      <Label label="COUNTRY" className="dark:text-mediumGray" />
      <Dropdown
        options={options}
        ref={dropDownRef}
        onChange={(newValue) => {
          newValue && setValue(newValue);
          countryChangeHandler(newValue);
        }}
        placeholder="Select an Country"
        value={
          props.value === 0
            ? "Select a country "
            : `${options[props.value - 1]}`
        }
        className="dark:bg-black dark:text-mediumGray text-md  my-3 font-semibold font-sans text-slate-700   md:w-11/12 xs:w-full py-1  border rounded-lg bg-blue-50 bg-transparent   ease-in focus:caret-slate-500 "
      />
    </div>
  );
};

export default CountryDropdown;

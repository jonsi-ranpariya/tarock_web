import { useRef, useState } from "react";
import Dropdown, { Option } from "react-dropdown";
import useSWR from "swr";
import { CityData } from "../../models/data";
import Label from "../UI/Label";

const CityDropdown = (props: {
  onChange: (stateid: string) => void;
  countryid: number;
  stateid: number;
  value: number;
}) => {
  const [value, setValue] = useState<Option>();
  const options: Option[] = [];
  const dropDownRef = useRef() as React.LegacyRef<Dropdown>;

  const url = `https://interview-api.kodecreators.com/api/cities?state_id=${props.stateid}&country_id=${props.countryid}`;
  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data, error, isLoading } = useSWR(url, fetcher);
  const cityData: CityData = data || [];

  cityData?.data?.map((item) =>
    options.push({ label: item.name, value: item.id.toString() })
  );
  const city = options.filter((item) => item.value === props.value.toString());
  const name = city.length ? city[0].value : "";
  console.log(cityData);
  return (
    <div>
      <Label label="City" className="dark:text-mediumGray" />
      <Dropdown
        options={options}
        ref={dropDownRef}
        onChange={(newValue) => {
          newValue && setValue(newValue);
          props.onChange(newValue.value);
        }}
        value={props.value === 0 ? "Select a city " : name}
        placeholder="Select a City"
        className="dark:bg-black dark:text-mediumGray text-md  my-3 font-semibold font-sans text-slate-700   md:w-11/12 xs:w-full py-1  border rounded-lg bg-blue-50 bg-transparent   ease-in focus:caret-slate-500 "
      />
    </div>
  );
};

export default CityDropdown;

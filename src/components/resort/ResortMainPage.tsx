import { useState } from "react";
import SearchBar from "../UI/SearchBar";
import StatusBar from "../UI/StatusBar";
import Table from "../UI/Table";
import Dropdown, { Option } from "react-dropdown";
import Resort from "./Resort";
import Button from "../UI/Button";
import { ExportCSV } from "../UI/ExportCsv";
import { useCrud } from "../../store/crud-context";

type statusType = {
  label: string;
  value: string;
};
const ResortMainPage = () => {
  const { datarender } = useCrud();
  const [statusType, setStatusType] = useState("");
  const statusChange = (statusType: Option) => {
    const label = statusType.label?.toString() || "";
    setStatusType(label);
  };
  return (
    <div>
      <div className="mt-7 text-left lg:flex items-baseline xs:block ">
        <SearchBar />
        <StatusBar onChange={statusChange} />
        <ExportCSV csvData={datarender} fileName="Tarock Data Sheet" />
      </div>
      <div>
        <Resort statusType={statusType} />
      </div>
    </div>
  );
};

export default ResortMainPage;

import { useUser } from "../../store/user-context";
import { ExportCSV } from "../UI/ExportCsv";
import SearchBar from "../UI/SearchBar";
import User from "./User";

const UserMainPage = () => {
  let { datarender, searchHandler } = useUser();
  console.log(datarender);
  return (
    <div>
      <div className="mt-7 text-left lg:flex items-baseline xs:block ">
        <SearchBar
          onClick={(key: string) => {
            searchHandler(key);
          }}
        />
        <ExportCSV csvData={datarender} fileName="Tarock Data Sheet" />
      </div>
      <div>
        <User />
      </div>
    </div>
  );
};

export default UserMainPage;

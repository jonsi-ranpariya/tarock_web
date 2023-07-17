import { useUser } from "../../store/user-context";
import Table from "../UI/Table";

import UserTable from "./UserTable";

const User = () => {
  let { datarender } = useUser();
  console.log(datarender);
  return (
    <UserTable
      data={datarender}
      rowsPerPage={10}
      header={["User Id", "Email", "Username", "Result Code", "Actions"]}
    />
  );
};

export default User;

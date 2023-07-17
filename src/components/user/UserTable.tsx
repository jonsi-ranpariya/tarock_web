import { Product, UserData, UserResponseData } from "../../models/data";
import TableHeader from "../UI/TableHeader";
import { useState } from "react";
import useTable from "../../hooks/useTable";
import TableFooter from "../UI/TableFooter";
import Button from "../UI/Button";
import UserTableRow from "./UserTableRow";

type TableProps = {
  data: UserResponseData[];
  rowsPerPage: number;
  header: string[];
};

function UserTable({ data, rowsPerPage, header }: TableProps) {
  const [page, setPage] = useState(1);
  const { slice, range } = useTable({ data, page, rowsPerPage });

  return (
    <div>
      <table className="w-full mt-10 md:text-center  lg:text-left xs:text-center">
        <thead className="">
          <TableHeader tableheader={header} />
        </thead>
        <UserTableRow users={slice} />
      </table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
    </div>
  );
}

export default UserTable;

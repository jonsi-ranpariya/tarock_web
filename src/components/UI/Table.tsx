import TableRow from "./TableRow";
import { Product } from "../../models/data";
import TableHeader from "./TableHeader";
import { useState } from "react";
import useTable from "../../hooks/useTable";
import TableFooter from "./TableFooter";
import Button from "./Button";

type TableProps<DataType> = {
  data: Array<DataType>;
  rowsPerPage: number;
  header: string[];
  // data_from: string;
};

function Table<T>({ data, rowsPerPage, header }: TableProps<T>) {
  const [page, setPage] = useState(1);
  const { slice, range } = useTable({ data, page, rowsPerPage });

  return (
    <div>
      <table className="w-full mt-10 md:text-center  lg:text-left xs:text-center">
        <thead className="">
          <TableHeader tableheader={header} />
        </thead>
        <TableRow items={slice}/>
      </table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
    </div>
  );
}

export default Table;

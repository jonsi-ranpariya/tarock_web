import { AvtarResponseData,AvtarData } from "../../models/data";
import TableHeader from "../UI/TableHeader";
import { useState } from "react";
import TableFooter from "../UI/TableFooter";
import TableRows from "./TableRows";
import useTable from "../../hooks/useTable";

type TableProps = {
  data: AvtarData[];
  rowsPerPage: number;
  header: string[];
};

function Table({ data, rowsPerPage, header }: TableProps) {
  const [page, setPage] = useState(1);
  const { slice, range } = useTable({ data, page, rowsPerPage });

  return (
    <div>
      <table className="w-full mt-10 md:text-center  lg:text-left xs:text-center">
        <thead className="">
          <TableHeader tableheader={header} />
        </thead>
        <TableRows users={slice} />
      </table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
    </div>
  );
}

export default Table;

// import TableRow from "./TableRows";
// import { Product } from "../../models/data";
// import TableHeader from "./TableHeader";
// import { useState } from "react";
// import useTable from "../../hooks/useTable";
// import TableFooter from "./TableFooter";

// type TableProps<DataType> = {
//   data: Array<DataType>;
//   rowsPerPage: number;
//   header: string[];
// };

// function Table<T>({ data, rowsPerPage, header }: TableProps<T>) {
//   const [page, setPage] = useState(1);
//   const { slice, range } = useTable({ data, page, rowsPerPage });

//   return (
//     <div>
//       <table className="w-full mt-10 md:table-fixed align-middle">
//         <thead className="">
//           <TableHeader tableheader={header} />
//         </thead>
//         <TableRow items={slice}/>
//       </table>
//       <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
//     </div>
//   );
// }

// export default Table;

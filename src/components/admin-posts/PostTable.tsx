import { useState } from "react";
import { PostData } from "../../models/post-data";
import useTable from "../../hooks/useTable";
import TableHeader from "../UI/TableHeader";
import TableFooter from "../UI/TableFooter";
import PostTableRow from "./PostTableRow";

type TableProps = {
  data: PostData[];
  rowsPerPage: number;
  header: string[];
};

const PostTable = ({ data, rowsPerPage, header }: TableProps) => {
  const [page, setPage] = useState(1);
  const { slice, range } = useTable({ data, page, rowsPerPage });

  return (
    <div>
      <table className="w-full mt-10 md:text-center  lg:text-left xs:text-center table-fixed">
        <thead className="">
          <TableHeader tableheader={header} />
        </thead>
        <PostTableRow posts={slice} />
      </table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
    </div>
  );
};

export default PostTable;

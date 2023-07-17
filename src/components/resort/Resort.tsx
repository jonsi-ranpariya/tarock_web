import { useCrud } from "../../store/crud-context";
import Table from "../UI/Table";

const Resort = (props: { statusType: string }) => {
  const { datarender } = useCrud();

  return (
    <Table
      data={datarender}
      rowsPerPage={3}
      header={["NAME", "DESCRIPTION", "PRICE", "STATUS", "ACTIONS"]}
    />
  );
};

export default Resort;

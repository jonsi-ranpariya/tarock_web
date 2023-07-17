import { useNavigate } from "react-router-dom";
import "../../styles/TableRow.css";
import Actions from "./Actions";
import TableItem from "./TableItem";
import { useUser } from "../../store/user-context";
import { useState } from "react";
import UserDelete from "../user/UserDelete";


//declare dynamic types
type TableRowProps<DataType> = {
  items: Array<DataType>;
};

const TableRow = <T,>({ items }: TableRowProps<T>) => {

  const { deleteHandler } = useUser();
  const navigate = useNavigate();


  return (
    <tbody>
      {/* {items.map((item, key) => {
        return (
          <tr className="border-x-0 border-t-0 border-b border-slate-200  text-slate-600 dark:text-mediumGray text-sm font-medium xs:text-left md:text-left  xs:inline-block md:table-row  xs:py-4 md:py-0">

            <TableItem title="User Id" children={item.internal_user_id} />
            <TableItem title="Email" children={item.email} />
            <TableItem title="Username" children={item.username} />
            <TableItem
              title="Characteristics"
              children={item.characteristics}
            />
            <TableItem
              title="Actions"
              children={
                <Actions
                  id={item.internal_user_id}
                  onEditClick={() => {
                    navigate(
                      `/home/user-related-content/${item.internal_user_id}/edit`
                    );
                  }}
                  onDeleteClick={(id: string) => {

                  }}
                />
              }
            />
          </tr>
        );
      })} */}
    </tbody>
  );
};

export default TableRow;

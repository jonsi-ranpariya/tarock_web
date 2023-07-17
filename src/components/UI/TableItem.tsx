import React from "react";

const TableItem = (props: { children: React.ReactNode; title: string }) => {
  return (
    <td className=" md:py-4  xs:py-2 xs:block md:table-cell ">
      <div className="xs:w-4/5  lg:mx-0 flex">
        <span className="text-slate-400 xs:visible md:hidden mr-3 font-bold ">
          {props.title}
        </span>
        {props.children}
      </div>
    </td>
  );
};

export default TableItem;

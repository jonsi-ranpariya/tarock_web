const TableHeader = (props: { tableheader: string[] }) => {
  return (
    <tr className="border-x-0 border-t-0 border-b border-slate-200 py-2 tracking-wider xs:collapse md:visible">
      {props.tableheader.map((item,index) => (
        <th key={index} className="text-slate-400 text-sm font-medium py-4 xs:text-center lg:text-left">
          {item}
        </th>
      ))}
    </tr>
  );
};

export default TableHeader;

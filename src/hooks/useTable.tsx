import { useState, useEffect } from "react";

type RangeProps<DataType> = {
  data: Array<DataType>;
  rowsPerPage: number;
};

type CommonProps<DataType> = {
  data: Array<DataType>;
  rowsPerPage: number;
  page: number;
};

function calculateRange<T>({ data, rowsPerPage }: RangeProps<T>, page: number) {
  const range: number[] = [];
  const num = Math.ceil(data.length / rowsPerPage);
  const maxRange = Math.min(num, 4); // limit range to 4 pages
  let start = Math.max(page - 2, 1);
  let end = Math.min(start + maxRange - 1, num);
  start = Math.max(end - maxRange + 1, 1);
  for (let i = start; i <= end; i++) {
    range.push(i);
  }
  return range;
}
const sliceData = <T,>({ data, rowsPerPage, page }: CommonProps<T>) => {
  return data.slice((page - 1) * rowsPerPage, page * rowsPerPage);
};

const useTable = <T,>({ data, rowsPerPage, page }: CommonProps<T>) => {
  const [tableRange, setTableRange] = useState<number[]>([]);
  const [slice, setSlice] = useState<T[]>([]);

  useEffect(() => {
    const range = calculateRange({ data, rowsPerPage }, page);
    setTableRange([...range]);

    const slice = sliceData({ data, page, rowsPerPage });
    setSlice([...slice]);
  }, [data, page, rowsPerPage]);

  return { slice, range: tableRange };
};

export default useTable;

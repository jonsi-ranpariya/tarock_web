import Button from "./Button";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import { Product } from "../../models/data";

type CSVDataProps<DataType> = {
  csvData: Array<DataType>;
  fileName: string;
};

export const ExportCSV = <T,>({ csvData, fileName }: CSVDataProps<T>) => {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";

  const exportToCSV = <T,>({ csvData, fileName }: CSVDataProps<T>) => {
    const ws = XLSX.utils.json_to_sheet(csvData);
    var wscols = [
      { wch: 6 },
      { wch: 40 },
      { wch: 10 },
      { wch: 20 },
      { wch: 30 },
    ];

    ws["!cols"] = wscols;
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

  return (
    <Button
      variant="filled"
      className="bg-dimGray text-white md:mx-5 xs:mx-0 dark:bg-white dark:text-black"
      onClick={(e) => exportToCSV({ csvData, fileName })}
    >
      Export Data Into Excel
    </Button>
  );
};

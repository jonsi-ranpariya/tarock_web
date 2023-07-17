import { useState } from "react";

import Input from "./Input";
import Label from "./Label";

const PdfUpload = (props: { onChange: (file?: File) => void }) => {
  const [file, setFile] = useState<File>();
  function pdfChangeHandler(event: any) {
    setFile(event.target.files[0]);
    props.onChange(event.target.files[0]);
  }

  return (
    <div>
      <Label label="UPLOAD PDF" className="dark:text-mediumGray" />
      <Input
        id="image"
        type="file"
        placeholder="Enter PDF"
        className="lg:w-11/12 md:w-11/12 xs:w-full dark:bg-black dark:text-mediumGray"
        onChange={pdfChangeHandler}
      />
    </div>
  );
};

export default PdfUpload;

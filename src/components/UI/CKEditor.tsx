import { useEffect } from "react";

const CKEditorComponent = (props: {
  value: string;

  onChange: (description: string) => void;
}) => {
  let value = "";
  useEffect(() => {
    fetchValue();
  });
  const fetchValue = async () => {
    value = props.value;
  };
  return (
    <div className="my-7">
      {/* <CKEditor
        initData={`<p>${props.value}</p>`}
        editor={ClassicEditor}
        onChange={(editor: any) => {
          const data: string = editor.editor.getData();

          const description: string = data.replace(/(<([^>]+)>)/gi, " ");
          props.onChange(description);
        }}
      /> */}
    </div>
  );
};

export default CKEditorComponent;

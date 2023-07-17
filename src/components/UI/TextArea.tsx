import React, { TextareaHTMLAttributes } from "react";

interface Props
  extends React.DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {}

const TextArea = React.forwardRef<HTMLTextAreaElement, Props>(
  ({ ...props }, ref) => {
    return (
      <div>
        <textarea
          ref={ref}
          {...props}
          className={`text-md  font-semibold font-sans placeholder:font-sans text-slate-700 px-2 my-3 block  py-3  border rounded-lg bg-blue-50 bg-transparent  focus:outline-none  focus:border-2  ease-in focus:caret-sky-500 focus:border-sky-100 placeholder:text-slate-400 placeholder:text-md ${props.className}`}
        />
      </div>
    );
  }
);

export default TextArea;

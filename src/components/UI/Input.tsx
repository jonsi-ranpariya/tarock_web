import React from "react";

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

const Input = React.forwardRef<HTMLInputElement, Props>(({ ...props }, ref) => {
  return (
    <div>
      <input
        ref={ref}
        {...props}
        className={`text-md  font-semibold font-sans placeholder:font-sans text-slate-700 dark:text-mediumGray px-2 my-3 block  py-3  border rounded-lg bg-blue-50 bg-transparent  focus:outline-none  focus:border-2  ease-in focus:caret-sky-500 focus:border-sky-100 placeholder:text-slate-400 placeholder:text-md ${props.className}`}
      />
    </div>
  );
});

export default Input;

import { FC, ReactNode } from "react";

export interface LabelProps {
  label?: ReactNode;
  suffix?: ReactNode;
  required?: boolean;
  children?: ReactNode;
  className?: string;
}

const Label: FC<LabelProps> = ({
  label,
  suffix,
  className,
  required = false,
  children,
}) => {
  return (
    <label className="relative">
      <p
        className={`text-gray-900 dark:text-slate-100 font-bold text-md  font-sans ${className}`}
      >
        {label}

        {label && required && (
          <span className="text-error text-red-600 ml-1">*</span>
        )}
      </p>
      {children}
    </label>
  );
};

export default Label;

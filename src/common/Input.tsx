import React, { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
  icon?: any;
}

const Input: FC<InputProps> = ({ label, className, icon, ...rest }) => {
  return (
    <div className={className}>
      {label && (
        <label className="mb-2 block text-sm font-semibold" htmlFor={rest.id}>
          {label}
        </label>
      )}
      <div className="text-gray-600 focus-within:text-gray-400 relative">
        {icon && (
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <div className="focus:shadow-outline p-1 focus:outline-none">
              {icon}
            </div>
          </span>
        )}
        <input
          {...rest}
          className={`sm:text-md text-gray-900 block w-full flex-1 rounded-lg border border-[#6554d518] p-3.5 outline-none ${
            icon && "pl-10"
          } ${rest.type === "submit" && "bg-blue-500 text-white"}`}
        />
      </div>
    </div>
  );
};

export default Input;

import React from "react";

type Props = {
  label: string;
  require?: boolean;
  htmlFor?: string;
};

const Label = ({ label, require, htmlFor }: Props) => {
  return (
    <label
      htmlFor={htmlFor}
      className="font-normal text-base text-gray-600 flex items-center h-full mt-2"
    >
      {label}
      {require ? <span className="text-red-500">*</span> : null}
    </label>
  );
};

export default Label;

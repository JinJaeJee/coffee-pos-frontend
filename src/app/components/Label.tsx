import React from "react";

type Props = {
  label: string;
  require?: boolean;
};
const Label = ({ label, require }: Props) => {
  return (
    <div className="font-normal text-base text-gray-600 flex items-center h-full mt-2">
      {label}
      {require ? <span className="text-red-500">*</span> : null}
    </div>
  );
};

export default Label;

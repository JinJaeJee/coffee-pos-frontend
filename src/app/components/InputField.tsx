import { ErrorMessage, Field, useFormikContext } from "formik";
import React, { useCallback } from "react";

type Prop = {
  value: string;
  placeholder?: string;
  defaultValue?: string | number;
  type?: "text" | "password" | "number";
  onChange?: (key: string, value: string | number) => void;
};
const InputField = ({
  value,
  placeholder,
  defaultValue,
  type = "text",
  onChange,
}: Prop) => {
  const { touched, errors, setFieldValue } = useFormikContext<{
    [key: string]: boolean | string | undefined;
  }>();

  const handleOnChange = useCallback(
    (e: any) => {
      const rawValue = e.target.value;
      setFieldValue(value, rawValue);
      onChange?.(value, rawValue);
    },
    [onChange, setFieldValue, value]
  );
  return (
    <div className="flex flex-col">
      <Field
        type={type}
        id={value}
        name={value}
        placeholder={placeholder}
        min={0}
        defaultValue={defaultValue}
        className={`block w-full focus:border-sky-500 border border-gray-300 focus:outline-none rounded-md px-3 py-2 appearance-none focus:ring-0 text-base text-gray-700 ${
          touched[value] && errors[value] ? "border-red-500" : ""
        }`}
        onChange={handleOnChange}
      />

      <ErrorMessage
        name={value as string}
        component="div"
        className="text-red-500 text-sm"
      />
    </div>
  );
};

export default InputField;

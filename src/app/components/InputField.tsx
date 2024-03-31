import { ErrorMessage, Field, useFormikContext } from "formik";
import React, { useCallback } from "react";

type Prop = {
  value: string;
  placeholder?: string;
  defaulValue?: string | number;
  type?: "text" | "password" | "number";
  onChange?: (key: string, value: string | number) => void;
};
const InputField = ({
  value,
  placeholder,
  defaulValue,
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
    <div>
      <Field
        type={type}
        id={value}
        name={value}
        placeholder={placeholder}
        min={0}
        defaulValue={defaulValue}
        className={``}
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

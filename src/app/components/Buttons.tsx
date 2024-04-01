import React, { useState } from "react";
import IconName, { ICON_NAME } from "./IconName";
import clsx from "clsx";

export type ButtonClassNameType = {
  [key: string]: string;
};

const ButtonClassname: ButtonClassNameType = {
  yellow:
    "text-just-service-text-black bg-yellow font-semibold text-base h-12 rounded-md  justify-center px-3 ",
  red: "text-white bg-red h-12 rounded-md font-medium text-base  justify-center px-3 ",
  transparent:
    "text-black h-12 border border-gray rounded-md text-base font-medium  justify-center px-3 ",
  green:
    "text-white bg-green h-12 rounded-md font-medium text-base justify-center px-3 ",
  black:
    "bg-black h-12 rounded-md font-medium text-base text-white  justify-center px-3 ",
  transparentTextBlue: "text-blue h-12 text-base font-medium flex flex-row",
  transparentNoBorder: "h-12 text-base font-medium flex flex-row",
  transparentTextWhite: "text-white h-12 text-base font-medium flex flex-row",
};

type ButtonType = "submit" | "button";

export type ButtonProps = {
  title?: string;
  color: string;
  className?: string;
  disabled?: boolean;
  icon?: ICON_NAME;
  onClick?: () => void;
  type?: ButtonType;
  tooltip?: boolean;
};

const Buttons = ({
  title,
  color,
  className,
  disabled,
  icon,
  onClick,
  type,
  tooltip,
}: ButtonProps) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  if (title === undefined && icon === undefined) {
    title = "ตกลง";
  }
  return (
    <div className="relative min-w-fit min-h-fit">
      <button
        type={type}
        onClick={!disabled ? onClick : undefined}
        onMouseEnter={() => setTooltipVisible(true)}
        onMouseLeave={() => setTooltipVisible(false)}
        className={clsx(
          "flex justify-center w-full",
          ButtonClassname[color],
          !disabled ? "cursor-pointer" : "cursor-default opacity-75",
          className
        )}
      >
        <div
          className={clsx(
            "flex items-center h-full min-w-[48px] justify-center",
            icon ? "gap-2" : ""
          )}
        >
          {icon === undefined ? (
            <div></div>
          ) : (
            <IconName
              icon={icon}
              invertColor={color === "transparentTextWhite"}
            />
          )}
          {title}
        </div>
      </button>
      {isTooltipVisible && tooltip && (
        <div
          className="max-w-max z-30 absolute text-white bg-black p-2 rounded-b-xl rounded-s-xl my-1 m-auto text-base font-normal"
          style={{ whiteSpace: "nowrap" }}
        >
          {tooltip}
        </div>
      )}
    </div>
  );
};

export default Buttons;

import React from "react";
import HistoryIcon from "../../../public/Icon/History.svg";
import EditIcon from "../../../public/Icon/Edit.svg";
import BinIcon from "../../../public/Icon/Bin.svg";
import BillIcon from "../../../public/Icon/Bill.svg";
import BillPrintIcon from "../../../public/Icon/Billprint.svg";
import SideMenuButton from "../../../public/Icon/SideMenuButton.svg";
import InternetIcon from "../../../public/Icon/InternetIcon.svg";
import NotificationIcon from "../../../public/Icon/NotificationIcon.svg";
import DropdownIcon from "../../../public/Icon/DropdownIcon.svg";
import CalendarIcon from "../../../public/Icon/Calendar.svg";
import ExportIcon from "../../../public/Icon/Export.svg";
import ImportIcon from "../../../public/Icon/Import.svg";
import SettingIcon from "../../../public/Icon/Setting.svg";
import SettingDotIcon from "../../../public/Icon/SettingDot.svg";
import DropdownBlack from "../../../public/Icon/DropdownIconBlack.svg";
import ClockIcon from "../../../public/Icon/Clock.svg";
import CloseCircle from "../../../public/Icon/Closecircle.svg";
import SortTable from "../../../public/Icon/SortTable.svg";
import ArrowLeft from "../../../public/Icon/ArrowLeft.svg";
import ArrowRight from "../../../public/Icon/ArrowRight.svg";
import CloseModal from "../../../public/Icon/CloseModal.svg";
import MoreRed from "../../../public/Icon/MoreRed.svg";
import MoreGreen from "../../../public/Icon/MoreGreen.svg";
import Thaibaht from "../../../public/Icon/Thaibaht.svg";
import Categories from "../../../public/Icon/Categories.svg";
import Image from "next/image";
import clsx from "clsx";

export type ICON_NAME =
  | "bin"
  | "history"
  | "edit"
  | "bill"
  | "billprint"
  | "sidemenu"
  | "internet"
  | "notification"
  | "dropdown"
  | "calendar"
  | "exportinfo"
  | "importinfo"
  | "setting"
  | "setting-dot"
  | "dropdownblack"
  | "clock"
  | "closecircle"
  | "sorttable"
  | "arrowleft"
  | "arrowright"
  | "closemodal"
  | "justlogologin"
  | "morered"
  | "moregreen"
  | "thaibaht"
  | "categories";

type IconSource = {
  [key: string]: string;
};

type Props = {
  icon: ICON_NAME;
  invertColor?: boolean;
};

const IconClassName: IconSource = {
  bin: BinIcon.src,
  history: HistoryIcon.src,
  edit: EditIcon.src,
  bill: BillIcon.src,
  billprint: BillPrintIcon.src,
  sidemenu: SideMenuButton.src,
  internet: InternetIcon.src,
  notification: NotificationIcon.src,
  dropdown: DropdownIcon.src,
  calendar: CalendarIcon.src,
  exportinfo: ExportIcon.src,
  importinfo: ImportIcon.src,
  setting: SettingIcon.src,
  "setting-dot": SettingDotIcon.src,
  dropdownblack: DropdownBlack.src,
  clock: ClockIcon.src,
  closecircle: CloseCircle.src,
  sorttable: SortTable.src,
  arrowleft: ArrowLeft.src,
  arrowright: ArrowRight.src,
  closemodal: CloseModal.src,
  morered: MoreRed.src,
  moregreen: MoreGreen.src,
  thaibaht: Thaibaht.src,
  categories: Categories.src,
};
const IconName = ({ icon, invertColor }: Props) => {
  return (
    <div>
      <Image
        src={IconClassName[icon]}
        alt="icon"
        className={clsx(invertColor ? "invert" : "")}
      />
    </div>
  );
};

export default IconName;

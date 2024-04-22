"use client";
import React, { useEffect, useState } from "react";
import useStore from "../stores/zustand/store";
import { usePathname } from "next/navigation";
import { getSession } from "next-auth/react";
import styles from "./Sidebar.module.css";
import {
  IoFastFoodOutline,
  IoHomeOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { MdPayment } from "react-icons/md";
import { BsBorderOuter } from "react-icons/bs";
import { PAGE_NAME } from "../constants/pageName";

type Props = {};

const Sidebar = (props: Props) => {
  const { isMenuOpen } = useStore();
  const currentPathName = usePathname();
  const pathSegments = currentPathName.split("/");
  pathSegments.splice(2, 1);
  const modifiedPath = pathSegments.join("/");
  const [session, setSession] = useState<any | null>(null);

  useEffect(() => {
    const fetchSession = async () => {
      const sessionData = await getSession();
      setSession(sessionData);
    };

    fetchSession();
  }, []);

  return (
    <div>
      {session ? (
        <div>
          {isMenuOpen && (
            <aside
              id="logo-sidebar"
              className=" w-40 h-[100vh] bg-white border-r border-gray-200 sm:translate-x-0"
              aria-label="Sidebar"
            >
              <div className="flex flex-col items-center h-full">
                <div className="border-gray-200">
                  <div className="flex flex-col items-center py-10 cursor-pointer group">
                    <div
                      className={
                        PAGE_NAME.HOME_PAGE === modifiedPath
                          ? "text-[#2E636E]"
                          : "group-hover:text-[#2E636E]"
                      }
                      onClick={() => {
                        window.location.href = PAGE_NAME.HOME_PAGE;
                      }}
                    >
                      <IoHomeOutline size={25} />
                    </div>
                    <div>
                      <a
                        href={PAGE_NAME.HOME_PAGE}
                        className={
                          PAGE_NAME.HOME_PAGE === modifiedPath
                            ? "text-[#A2774C]"
                            : "group-hover:text-[#A2774C]"
                        }
                      >
                        H O M E
                      </a>
                    </div>
                  </div>
                </div>
                <div className="border-gray-200">
                  <div className="flex flex-col items-center py-10 cursor-pointer group">
                    <div
                      className={
                        PAGE_NAME.MENU_PAGE === modifiedPath
                          ? "text-[#2E636E]"
                          : "group-hover:text-[#2E636E]"
                      }
                      onClick={() => {
                        window.location.href = PAGE_NAME.MENU_PAGE;
                      }}
                    >
                      <IoFastFoodOutline size={25} />
                    </div>
                    <div>
                      <a
                        href={PAGE_NAME.MENU_PAGE}
                        className={
                          PAGE_NAME.MENU_PAGE === modifiedPath
                            ? "text-[#A2774C]"
                            : "group-hover:text-[#A2774C]"
                        }
                      >
                        M E N U
                      </a>
                    </div>
                  </div>
                </div>
                <div className="border-gray-200">
                  <div className="flex flex-col items-center py-10 cursor-pointer group">
                    <div
                      className={
                        PAGE_NAME.PAYMENT_PAGE === modifiedPath
                          ? "text-[#2E636E]"
                          : "group-hover:text-[#2E636E]"
                      }
                      onClick={() => {
                        window.location.href = PAGE_NAME.PAYMENT_PAGE;
                      }}
                    >
                      <MdPayment size={25} />
                    </div>
                    <div>
                      <a
                        href={PAGE_NAME.PAYMENT_PAGE}
                        className={
                          PAGE_NAME.PAYMENT_PAGE === modifiedPath
                            ? "text-[#A2774C]"
                            : "group-hover:text-[#A2774C]"
                        }
                      >
                        P A Y M E N T
                      </a>
                    </div>
                  </div>
                </div>
                <div className="border-gray-200">
                  <div className="flex flex-col items-center py-10 cursor-pointer group">
                    <div
                      className={
                        PAGE_NAME.ORDER_PAGE === modifiedPath
                          ? "text-[#2E636E]"
                          : "group-hover:text-[#2E636E]"
                      }
                      onClick={() => {
                        window.location.href = PAGE_NAME.ORDER_PAGE;
                      }}
                    >
                      <BsBorderOuter size={25} />
                    </div>
                    <div>
                      <a
                        href={PAGE_NAME.ORDER_PAGE}
                        className={
                          PAGE_NAME.ORDER_PAGE === modifiedPath
                            ? "text-[#A2774C]"
                            : "group-hover:text-[#A2774C]"
                        }
                      >
                        O R D E R
                      </a>
                    </div>
                  </div>
                </div>
                <div className="border-gray-200">
                  <div className="flex flex-col items-center py-10 cursor-pointer group">
                    <div
                      className={
                        PAGE_NAME.SETTING_PAGE === modifiedPath
                          ? "text-[#2E636E]"
                          : "group-hover:text-[#2E636E]"
                      }
                      onClick={() => {
                        window.location.href = PAGE_NAME.SETTING_PAGE;
                      }}
                    >
                      <IoSettingsOutline size={25} />
                    </div>
                    <div>
                      <a
                        href={PAGE_NAME.SETTING_PAGE}
                        className={
                          PAGE_NAME.SETTING_PAGE === modifiedPath
                            ? "text-[#A2774C]"
                            : "group-hover:text-[#A2774C]"
                        }
                      >
                        S E T T I N G S
                      </a>
                    </div>
                  </div>
                </div>
                <div className="text-base font-normal text-gray-500  py-20">
                  <p>V.1.0</p>
                </div>
              </div>
            </aside>
          )}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Sidebar;

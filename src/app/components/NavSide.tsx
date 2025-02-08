"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Logo from "../../../public/Logo.png";
import { usePathname } from "next/navigation";
import { MdDateRange } from "react-icons/md";
import { getSession, signOut } from "next-auth/react";
import Link from "next/link";
import { RxDividerVertical } from "react-icons/rx";
import { IoMdArrowDropdown } from "react-icons/io";
import Sidebar from "./Sidebar";
import CurrentTimeComponent from "./CurrentTime";

type Props = {
  children: any;
};

const NavSide = (props: Props) => {
  const currentDate = new Date().toLocaleDateString("th");
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [session, setSession] = useState<any | null>(null);

  useEffect(() => {
    const fetchSession = async () => {
      const sessionData = await getSession();

      setSession(sessionData);
    };

    fetchSession();
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const pathName = usePathname();

  return (
    <div>
      <div>
        {pathName != "/login" ? (
          <>
            <div className="flex justify-between border-b-2 h-20 px-7">
              <div className="flex items-center">
                <Image width={80} height={80} src={Logo} alt="Logo" />
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <MdDateRange size={30} />
                </div>
                <CurrentTimeComponent /> {/** April 21st 2024, 10:00AM*/}
                <div className="flex items-center">
                  <div className="relative">
                    <div className="flex flex-row gap-5 items-center ">
                      <div>
                        <RxDividerVertical size={30} />
                      </div>
                      <button
                        type="button"
                        className="flex gap-2 items-center text-sm rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                        aria-expanded="false"
                        data-dropdown-toggle="dropdown-user"
                        onClick={toggleDropdown}
                      >
                        <span className="sr-only">Open user menu</span>
                        <div>
                          <Image
                            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                            alt="user photo"
                            height={30}
                            width={30}
                          />
                        </div>
                        <div className="text-base">
                          {session?.user?.full_name ?? "-"}
                        </div>
                        <div>
                          <IoMdArrowDropdown />
                        </div>
                      </button>
                    </div>

                    {isDropdownOpen && (
                      <div
                        className="z-50 absolute mt-2 right-0 text-base list-none bg-gray-700 dark:bg-gray-800 divide-y divide-gray-200 rounded shadow-md dark:shadow-lg" // Updated classes
                        id="dropdown-user"
                      >
                        <div className="px-4 py-2" role="none">
                          <p
                            className="text-sm text-gray-100 dark:text-white"
                            role="none"
                          >
                            {session?.user?.full_name}
                          </p>
                          <p
                            className="text-sm font-medium text-gray-100 truncate dark:text-white"
                            role="none"
                          >
                            {session?.user?.email}
                          </p>
                        </div>
                        <ul className="py-2" role="none">
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-sm font-medium text-gray-100 hover:bg-gray-600 hover:text-white dark:text-white" // Updated classes
                              role="menuitem"
                            >
                              Earnings
                            </a>
                          </li>
                          <li>
                            <Link
                              href="/change-password"
                              className="block px-4 py-2 text-sm font-medium text-gray-100 hover:bg-gray-600 hover:text-white dark:text-white" // Updated classes
                              role="menuitem"
                            >
                              Change password
                            </Link>
                          </li>
                          <li>
                            <Link
                              href={"/login"}
                              className="block px-4 py-2 text-sm font-medium text-gray-100 hover:bg-gray-600 hover:text-white dark:text-white" // Updated classes
                              role="menuitem"
                              onClick={() => signOut()}
                            >
                              Sign out
                            </Link>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[calc(100vh-64px)] flex flex-row">
              <Sidebar />
              <div className=" w-full">{props.children}</div>
            </div>
          </>
        ) : (
          // <Loading />
          <div className=" w-full">{props.children}</div>
        )}
      </div>
    </div>
  );
};

export default NavSide;

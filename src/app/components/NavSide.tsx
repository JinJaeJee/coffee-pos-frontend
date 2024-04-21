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

type Props = {
  children: any;
};

const NavSide = (props: Props) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [session, setSession] = useState<any | null>(null);

  useEffect(() => {
    const fetchSession = async () => {
      const sessionData = await getSession();
      console.log(sessionData);
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
          <div className="flex justify-between border-b-2 h-20 px-7">
            <div className="flex items-center">
              <Image width={80} height={80} src={Logo} alt="Logo" />
            </div>
            <div className="flex items-center gap-2">
              <div>
                <MdDateRange size={30} />
              </div>
              <p>April 21st 2024, 10:00AM</p>
              <div className="flex items-center">
                <div className="relative">
                  <div className="flex flex-row gap-5 items-center ">
                    <div>
                      <RxDividerVertical />
                    </div>
                    <button
                      type="button"
                      className="flex gap-2 items-center text-sm rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                      aria-expanded="false"
                      data-dropdown-toggle="dropdown-user"
                      onClick={toggleDropdown}
                    >
                      <span className="sr-only">Open user menu</span>
                      <Image
                        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                        alt="user photo"
                        height={8}
                        width={8}
                      />
                      <div className="text-base">
                        {session?.user?.full_name ?? "-"}
                      </div>
                      <div>
                        <IoMdArrowDropdown />
                      </div>
                    </button>
                  </div>

                  {/* dropdown */}
                  {isDropdownOpen && (
                    <div
                      className="z-50 absolute mt-2 right-0 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                      id="dropdown-user"
                    >
                      {/* Dropdown content */}
                      <div className="px-4 py-3" role="none">
                        <p
                          className="text-sm text-gray-900 dark:text-white"
                          role="none"
                        >
                          {session?.user?.full_name}
                        </p>
                        <p
                          className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                          role="none"
                        >
                          {session?.user?.email}
                        </p>
                      </div>
                      <ul className="py-1" role="none">
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                            role="menuitem"
                          >
                            Dashboard
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                            role="menuitem"
                          >
                            Settings
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                            role="menuitem"
                          >
                            Earnings
                          </a>
                        </li>
                        <li>
                          <a
                            href="/change-password"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                            role="menuitem"
                          >
                            Change password
                          </a>
                        </li>
                        <li>
                          <Link
                            href={"/login"}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
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
        ) : (
          // <Loading />
          <div className=" w-full overflow-y-scroll no-scrollbar">
            {props.children}
          </div>
        )}
      </div>
    </div>
  );
};

export default NavSide;

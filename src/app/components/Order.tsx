"use client";

import { useState } from "react";
import { IoMdAdd, IoMdPersonAdd } from "react-icons/io";
import { IoTrashBinSharp } from "react-icons/io5";
import OrderList from "./OrderList";

const Order = () => {
  const [isMember, setIsmember] = useState(false);

  return (
    <div>
      <div className="p-5">
        <div>
          <div className="flex justify-between text-4xl pb-5">
            <h2 className="">Order#</h2>
            <h2>123456</h2>
          </div>
          {isMember ? (
            <div className="flex text-xl items-center gap-5">
              <h3>
                <span>Customer : </span>Jim Doe
              </h3>
              <div>
                <IoTrashBinSharp />
              </div>
            </div>
          ) : (
            <div className="flex text-xl items-center gap-5">
              <h3>
                <span>Guest</span>
              </h3>
              <div>
                <IoMdPersonAdd />
              </div>
            </div>
          )}
          <div className="flex justify-center border-dotted border-b-2 border-black pt-4"></div>
          <div className="pt-4">
            <OrderList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;

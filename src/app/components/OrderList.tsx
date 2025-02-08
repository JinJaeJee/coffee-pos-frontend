import Image from "next/image";
import React from "react";
import { orderList } from "../constants/mockProps";

const OrderList = () => {
  return (
    <div className="overflow-y-auto mb-4 h-[400px]">
      {orderList.map((list) => (
        <div className="flex rounded-lg bg-gray-500 p-5 m-4" key={list.id}>
          <div className="">
            <Image
              src={list.image}
              width={75}
              height={75}
              alt="picture"
              className=""
            />
          </div>
          <div className="flex justify-between w-full">
            <div className="flex flex-col justify-between w-full h-full ml-2">
              <div>
                <h2>{list.title}</h2>
              </div>
              <div className="flex gap-5">
                <div>
                  <h2>
                    ฿ <span>{list.Price}</span>
                  </h2>
                </div>
                <div>
                  <h3>{list.details}</h3>
                </div>
              </div>
            </div>
            <div>
              <h2>
                <span>X</span>
                {list.qualtity}
              </h2>
            </div>
          </div>
        </div>
      ))}

      <div></div>
    </div>
  );
};

export default OrderList;

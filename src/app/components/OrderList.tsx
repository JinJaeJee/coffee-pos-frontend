import Image from "next/image";
import React from "react";

const OrderList = () => {
  return (
    <div className="overflow-y-auto mb-4">
      <div className="flex rounded-lg bg-gray-500 p-5">
        <div className="">
          <Image
            src={"/ลุย.png"}
            width={75}
            height={75}
            alt="picture"
            className=""
          />
        </div>
        <div className="flex justify-between w-full">
          <div className="flex flex-col justify-between w-full h-full ml-2">
            <div>
              <h2>Title</h2>
            </div>
            <div className="flex gap-5">
              <div>
                <h2> ฿ 500</h2>
              </div>
              <div>
                <h3>food details</h3>
              </div>
            </div>
          </div>
          <div>
            <h2>กดกก</h2>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default OrderList;

"use client";
import Image from "next/image";
import React from "react";
import { FoodItems } from "../constants/mockProps";
import Order from "../components/Order";

const HomePage = () => {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Left section */}
      <div className="px-5 pt-5 w-full md:w-[70%] h-[calc(100vh)] ">
        <div className="flex justify-between">
          <div className="">Search</div>
          <div> Sorted</div>
        </div>

        <div className="">Categories Tab</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {FoodItems.map((picture) => (
            <div className="border-2" key={picture.title}>
              <div>
                <Image
                  src={picture.url}
                  width={170}
                  height={170}
                  alt="picture"
                  className="rounded-lg"
                />
              </div>
              <div>
                <h3>{picture.title}</h3>
                <p>{picture.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div>Pagination tap</div>
      </div>
      {/* Right section */}
      <div className="w-[30%] border-l-2 ">
        <Order />
      </div>
    </div>
  );
};

export default HomePage;

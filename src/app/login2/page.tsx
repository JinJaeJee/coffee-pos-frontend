"use client";
import Image from "next/image";
import React from "react";

const login2Page = () => {
  return (
    <div>
      <div className="bg-gray-200 flex items-center justify-center min-h-screen">
        <div className="bg-white shadow-lg p-4 flex rounded-2xl">
          <div className="w-[50%]">
            <Image
              src="/coffee-bg-login.jpg"
              alt="Picture of the author"
              width={900}
              height={900}
              className="rounded-2xl"
            />
          </div>
          <div className="flex justify-center items-center w-[70%]">
            <div>
              <h1>Welcome to my Studio</h1>
              <form>
                <div>
                  <label htmlFor="Username"></label>
                  <input />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login2Page;

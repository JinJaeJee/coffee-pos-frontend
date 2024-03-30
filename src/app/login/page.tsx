import Image from "next/image";
import React from "react";

const loginPage = () => {
  return (
    <div>
      <section className="min-h-screen flex justify-center items-center bg-green-50">
        <div className="bg-white flex rounded-2xl shadow-lg max-w-5xl p-5">
          <div className="w-1/2">
            <Image
              src="/coffee-bg-login.jpg"
              alt="Picture of the author"
              width={700}
              height={700}
            />
          </div>
          <div className="flex items-center ju w-1/2">
            <div className="max-w-md mx-auto">
              <div className="flex items-start justify-center mb-4">
                <Image
                  src="/coffee-logo.png"
                  alt="Picture of the author"
                  width={150}
                  height={150}
                />
              </div>
              <h1 className="flex justify-center">Welcome Back</h1>
              <p className="text-center text-[12px] my-4"></p>

              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="Username"
                    className="text-sm font-medium text-gray-700"
                  >
                    Username
                  </label>
                  <input
                    type="username"
                    id="username"
                    name="username"
                    required
                    className="w-full p-2 border rounded-md mt-1"
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    className="w-full p-2 border rounded-md mt-1"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full p-2 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  Log In
                </button>
              </form>

              <div className="text-center text-sm mt-8">
                มีปัญหาโปรดติดต่อ เทพอ้วน <span>0929888742</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default loginPage;

"use client";
import { Form, Formik } from "formik";
import Image from "next/image";
import React, { useState } from "react";
import * as Yup from "yup";
import Label from "../components/Label";
import InputField from "../components/InputField";
import Buttons from "../components/Buttons";
import { signIn } from "next-auth/react";
import { LoginInput } from "../libs/types";

const validationSchema = Yup.object().shape({
  email: Yup.string().required("โปรดกรอก username"),
  password: Yup.string().required("รหัสผ่านไม่ถูกต้อง"),
});

type Props = {
  searchParams?: Record<"callbackUrl" | "error", string>;
};

const LoginPage = ({ searchParams }: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (values: LoginInput) => {
    console.log(values);
    await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: true,
      callbackUrl: process.env.NEXTAUTH_URL,
    });
  };

  return (
    <div className="relative object-cover w-screen h-screen overflow-hidden bg-no-repeat bg-cover bg-bg-login">
      <div className="bg-gray-200 flex items-center justify-center min-h-screen">
        <div className="bg-white shadow-lg p-4 flex rounded-2xl">
          <div className="w-[50%] rounded-3xl ">
            <Image
              src="/coffee-bg-login.jpg"
              alt="Picture of the author"
              width={900}
              height={900}
              className="rounded-2xl"
            />
          </div>
          <div className="flex justify-center items-center w-[70%] ">
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
            >
              {({ isValid }) => (
                <Form className="flex flex-col justify-center gap-5">
                  <div className="flex flex-col items-center justify-center">
                    <div>
                      <Image
                        src="/coffee-logo.png"
                        alt="Picture of the author"
                        width={100}
                        height={100}
                        className="rounded-2xl "
                      />
                    </div>
                    <div>Welcome Folks</div>
                    <div>This is coffee cafe helper</div>
                  </div>

                  {/*/** this is form input */}
                  <div className="flex flex-col">
                    {searchParams?.error ? (
                      <div className="my-3 text-center bg-red-100 rounded-md text-red">
                        Username หรือ Password ไม่ถูกต้อง
                      </div>
                    ) : (
                      <></>
                    )}

                    <Label label="Email" require />
                    <InputField value="email" type="text" />
                    <Label label="รหัสผ่าน" require />
                    <InputField
                      value="password"
                      type={showPassword ? "text" : "password"}
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      className="text-black"
                      type="checkbox"
                      checked={showPassword}
                      onChange={() => setShowPassword(!showPassword)}
                    />
                    <label>แสดงรหัสผ่าน</label>
                  </div>
                  <Buttons
                    type="submit"
                    color="black"
                    title="เข้าสู่ระบบ"
                    className="w-full"
                    disabled={!isValid}
                  />
                  <p className="text-base font-normal text-center text-just-service-text-gray">
                    หากเกิดข้อผิดพลาดหรือความขัดข้องในการใช้งานระบบ
                    <br />
                    โทรติดต่อ 099-9999999 หรือ
                    <br /> อีเมล coffee@cafe.co.th
                  </p>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

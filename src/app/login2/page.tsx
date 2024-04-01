"use client";
import { Form, Formik } from "formik";
import Image from "next/image";
import React from "react";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("โปรดกรอกEmail")
    .email("รูปแบบอีเมลที่กรอกไม่ถูกต้อง"),
  password: Yup.string().required("รหัสผ่านไม่ถูกต้อง"),
});

type Props = {
  searchParams?: Record<"callbackUrl" | "error", string>;
};

const login2Page = ({ searchParams }: Props) => {
  const initialValues = {
    email: "",
    password: "",
  };
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
            <Formik
              initialValues={initialValues}
              onSubmit={() => {}}
              validationSchema={validationSchema}
            >
              {({ isValid }) => (
                <Form>
                  <div>
                    <div>Logo</div>
                    <div>Welcome Folks</div>
                    <div>This is coffee cafe cashier helper</div>
                  </div>

                  {/*/** this is form input */}
                  <div>
                    {searchParams?.error ? (
                      <div> Username หรือ Password ไม่ถูกต้อง</div>
                    ) : (
                      <></>
                    )}
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login2Page;

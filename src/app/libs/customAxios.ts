// this is from customAxios.js
import axios from "axios";
import { getSession, signOut } from "next-auth/react";
import { toast } from "react-toastify";
import * as Sentry from "@sentry/nextjs";

const createCustomAxios = async () => {
  const session = await getSession();

  const customAxios = axios.create({
    baseURL: process.env.API_URL,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${session?.access_token}`,
    },
  });

  customAxios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (401 === error.response.status) {
        toast("กรุณาเข้าสู่ระบบใหม่อีกครั้ง", { toastId: -1 });
        signOut();
      } else if (
        400 === error.response.status ||
        500 === error.response.status
      ) {
        Sentry.captureMessage(
          `AxiosError : ${error.response.status} : ${error.request.__sentry_xhr_v2__?.method} ${error.request.__sentry_xhr_v2__?.url} `,
          {
            extra: { data: error.response.data },
          }
        );
      }

      return Promise.reject(error);
    }
  );

  return customAxios;
};

export default createCustomAxios;

import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      user_id: number;
      email: string;
      name: string;
    };
    access_token: string;
  }
}

import { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
  interface JWT {
    account_detail: {
      user_id: number;
      email: string;
      name: string;
    };
    access_token: string;
  }
}

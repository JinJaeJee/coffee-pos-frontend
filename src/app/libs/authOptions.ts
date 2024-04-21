import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";
import createCustomAxios from "./customAxios";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "jsmith",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const customAxios = await createCustomAxios();

        if (!credentials?.username || !credentials?.password) return null;

        const { username, password } = credentials;

        try {
          const res = await customAxios.post("/login", {
            username,
            password,
          });

          if (res.status === 401) {
            console.log(res.statusText);
            return null;
          }

          if (res) {
            return res.data;
          } else {
            return null;
          }
        } catch (error) {
          console.error("Error during authorization login", error);
          return null;
        }
      },
    }),
  ],
  ////// wait for  route signin
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) return { ...token, ...user };
      return token;
    },
    async session({ token, session }) {
      session.user = token.user;
      session.token = token.token;
      console.log("session", session);

      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

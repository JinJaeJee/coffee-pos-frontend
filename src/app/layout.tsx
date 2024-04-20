import type { Metadata } from "next";
import { Inter, Sarabun } from "next/font/google";
import "./globals.css";
import Providers from "./components/Provider";
import SideNav from "./components/SideNav";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });
const sarabun = Sarabun({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "POS for coffee cafe",
  description: "this will be frontend application for coffe cafe shop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={sarabun.className}>
        <Providers>
          <SideNav>{children}</SideNav>
        </Providers>
        <ToastContainer hideProgressBar />
      </body>
    </html>
  );
}

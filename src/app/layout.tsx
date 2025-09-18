import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";
import Aside from "./components/aside";
import {Poppins} from 'next/font/google';

export const metadata: Metadata = {
  title: "Mostafa : Portfolio",
  description: "My Portfolio",
};
const poppins = Poppins({
  subsets : ["latin"],
  weight :["400","500","700"],
  variable:"--poppins",
});
export default function RootLayout({children}: Readonly<{children:React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <Header/>
        {children}
        <Aside/>
      </body>
    </html>
  );
}

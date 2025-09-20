import type { Metadata } from "next";
import "./globals.css";
import './styles/variables.css';
import Header from "./components/header";
import Aside from "./components/aside";
import { poppins } from './fonts';

export const metadata: Metadata = {
  title: "Mostafa : Portfolio",
  description: "My Portfolio",
  viewport: "width=device-width, initial-scale=1.0"

};

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

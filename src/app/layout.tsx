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
      <head>
        <style>{`
         * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
body {
  font-family: var(--poppins), sans-serif;
  font-weight: 700;
  background-color: var(--smoky-black);
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px;
}
main {
  width: 65%;
  height: 90vh;
  background-color: var(--main-background);
  margin: 0 5px;
  border-radius: 10px;
  min-width: 450px;
}
header {
  background-color: var(--main-background);
  width: 60px;
  height: 90vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  border-radius: 50px;
}
header a {
  color: #e9e9f1;
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 10px;
}
header a:hover,
.contact-btn:hover ,.header-active {
  color: #0c0c0c;
  background: #28e98c;
  transition: background 400ms linear;
}
aside {
  width: 300px;
  height: 90vh;
  background-color: var(--main-background);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
      transition: all 500ms ease-in-out;

}
.profile-image {
  width: 100%;
  height: 50%;
  border-radius: 10px;
  position: relative;
  box-shadow: 0 0 40px #000000;
}
.profile-image img {
  object-fit: cover;
  border-radius: 10px;
}
.profile-name {
  width: 100%;
  font-family: var(--syne);
  font-size: 20px;
  color: #e9e9f1;
    text-align:center;

}
.profile-title {
  width: 100%;
  font-family: var(--syne);
  font-size: 16px;
  color: #e9e9f1;
  text-align:center;
}
.contact-btn {
  width: 100%;
  height: 50px;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  font-size: 20px;
  color: #fff;
  text-decoration: none;
}
.contact-btn svg {
  margin: 5px;
}

.social {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.social a {
  color: #e9e9f1;
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  border-radius: 50%;
  border: 2px solid #4b4b51;
  overflow: hidden;
}
.social a svg {
  transition: transform 0.2s ease;
}
.social a:hover svg {
  animation: social 0.6s ease forwards;
}
.aside-effect{
    width: 100%;
    height: 60px;
    flex-direction: row;
    align-items: center;
    position: fixed;
    top: 0;
    margin-top: 5px;
    box-shadow: 0 0 10px #969393;
}
.aside-effect .profile-title,.aside-effect .contact-btn,.aside-effect .social{
  display:none;
}
.aside-effect .profile-image{
  width: 50px;
  height:50px;
  border-radius:50%;
  font-size: 16px;
  overflow: hidden;
}
.aside-effect img{
    transform: translateY(10px);
  }

@keyframes social {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  30% {
    transform: translateY(-15px);
    opacity: 0;
  }
  31% {
    transform: translateY(15px);
    opacity: 1;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

        `}</style>
      </head>
      <body className={poppins.variable}>
        <Header/>
        {children}
        <Aside/>
      </body>
    </html>
  );
}

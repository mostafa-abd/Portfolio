"use client";
import "./../styles/header.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { House, FolderCode, BrainCircuit, Mail, User } from "lucide-react";

const Header = () => {
  const pathname = usePathname();




  return (
    <header >
      <Link
        href="/"
        title="Home"
        className={pathname === "/" ? "header-active" : ""}
      >
        <House size={26} />
      </Link>
      <Link
        href="/about"
        title="About me"
        className={pathname === "/about" ? "header-active" : ""}
      >
        <User size={26} />
      </Link>
      <Link
        href="/projects"
        title="Projects"
        className={pathname === "/projects" ? "header-active" : ""}
      >
        <FolderCode size={26} />
      </Link>
      <Link
        href="/skills"
        title="Skills"
        className={pathname === "/skills" ? "header-active" : ""}
      >
        <BrainCircuit size={26} />
      </Link>
      <Link
        href="/contact"
        title="Contact"
        className={pathname === "/contact" ? "header-active" : ""}
      >
        <Mail size={26} />
      </Link>
    </header>
  );
};

export default Header;

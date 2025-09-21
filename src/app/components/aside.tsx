"use client";

import { syne } from "../fonts";
import { useRef, useEffect } from "react";

import {
  MessageSquareText,
  Github,
  Linkedin,
  Send,
  Mail,
  Globe,
} from "lucide-react";
import Image from "next/image";
import myImage from "./../assets/mostafa.webp";

const Aside = () => {
  const aside = useRef(null);
  useEffect(() => {
    function handleScroll() {
      if (!aside.current) return;

      if (window.scrollY > 0) {
        (aside.current as HTMLElement).classList.add("aside-effect");
      } else {
        (aside.current as HTMLElement).classList.remove("aside-effect");
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <aside ref={aside}>
      <div className="profile-image">
<Image
  src={myImage}
  alt="Mostafa"
  fill
  style={{ objectFit: "cover" }}
  priority
  fetchPriority="high"
/>
      </div>
      <div className={`profile-name ${syne.variable}`}>
        Mostafa Abdel-Mawgoud
      </div>
      <div className={`profile-title ${syne.variable}`}>
        Full Stack Web Developer
      </div>
      <a href="" className="contact-btn">
        <Send />
        Get in touch
      </a>
      <div className="social">
        <a href="" title="Github">
          <Github size={18} />
        </a>
        <a href="" title="Linkedin">
          <Linkedin size={18} />
        </a>
        <a href="" title="Mail">
          <Mail size={18} />
        </a>
        <a href="" title="WhatsApp">
          <MessageSquareText size={18} />
        </a>
        <a href="" title="Website">
          <Globe size={18} />
        </a>
      </div>
    </aside>
  );
};
export default Aside;

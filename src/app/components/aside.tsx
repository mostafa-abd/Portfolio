import { syne } from "../fonts";
import {
  MessageSquareText,
  Github,
  Linkedin,
  Send,
  Mail,
  Globe,
} from "lucide-react";
import Image from 'next/image';
import myImage from './../assets/mostafa.webp'
const Aside = () => {
  return (
    <aside>
      <div className="profile-image">
              <Image
        src={myImage}   
        alt="Mostafa"
        width={400}    
        height={300}   
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
        <a href="">
          <Github size={18} />
        </a>
        <a href="">
          <Linkedin size={18} />
        </a>
        <a href="">
          <Mail size={18} />
        </a>
        <a href="">
          <MessageSquareText size={18} />
        </a>
        <a href="">
          <Globe size={18} />
        </a>
      </div>
    </aside>
  );
};
export default Aside;

import "./../styles/header.css";
import Link from "next/link";
import {
  House,
  FolderCode,
  BrainCircuit,
  FileDown,
  Mail,
  User,
} from "lucide-react";
const Header = () => {
  return (
    <header>
      <Link href="/" title="Home">
        <House size={32} />
      </Link>
      <Link href="/" title="About me">
        <User size={32} />
      </Link>
            <Link href="/" title="Projects">
        <FolderCode size={32} />
      </Link>
      <Link href="/" title="Skills">
        <BrainCircuit size={32} />
      </Link>
     <Link href="/" title="Contact">
      <Mail size={32} />
      </Link>
    </header>
  );
};
export default Header;

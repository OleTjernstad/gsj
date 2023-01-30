import "./front.css";

import Image from "next/image";
import logo from "../../../public/gsj-logo.png";

export default function FrontLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container">
      <header className="header">
        <div className="logo-container">
          <Image src={logo} alt="Glommasvingen logo" height={60} />
        </div>
      </header>
      {children}
      <footer className="footer">&copy; Footer Example</footer>
    </div>
  );
}

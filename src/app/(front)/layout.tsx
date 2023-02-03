import "./front.scss";

import Image from "next/image";
import Link from "next/link";
import { MainMenu } from "./components/mainMenu";
import logo from "../../../public/gsj-logo.png";

export default function FrontLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="header">
        <Link href="/">
          <Image
            src={logo}
            alt="Glommasvingen logo"
            style={{
              objectFit: "contain",
              height: "3rem",
              width: "8rem",
              display: "inline-block",
            }}
          />
        </Link>

        <MainMenu />
      </header>
      <div className="container">
        {children}
        <footer className="footer">&copy; Footer Example</footer>
      </div>
    </>
  );
}

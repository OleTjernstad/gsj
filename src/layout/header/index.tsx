import Image from "next/image";
import Link from "next/link";
import { MainMenu } from "../main-menu/mainMenu";
import logo from "../../../public/gsj-logo.png";

export function Header() {
  return (
    <header className="app-header">
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
  );
}

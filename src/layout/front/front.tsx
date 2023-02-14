import Image from "next/image";
import Link from "next/link";
import { MainMenu } from "../main-menu/mainMenu";
import logo from "../../../public/gsj-logo.png";
import styles from "./front.module.scss";

export default function FrontLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className={styles.header}>
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
      <div className={styles.container}>
        {children}
        <footer className={styles.footer}>&copy; Footer Example</footer>
      </div>
    </>
  );
}

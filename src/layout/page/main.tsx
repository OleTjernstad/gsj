import Image from "next/image";
import Link from "next/link";
import { MainMenu } from "../main-menu/mainMenu";
import { PortableText } from "@portabletext/react";
import logo from "../../../public/gsj-logo.png";
import styles from "../front/front.module.scss";

export default function PageLayout({
  children, // will be a page or nested layout
}: {
  children: any[];
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
        <main>
          <div className={styles.page}>
            <PortableText value={children} />
          </div>
        </main>
        <footer className={styles.footer}>&copy; Footer Example</footer>
      </div>
    </>
  );
}

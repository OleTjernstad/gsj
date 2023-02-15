import Image from "next/image";
import Link from "next/link";
import { MainMenu } from "../main-menu/mainMenu";
import { PortableText } from "@portabletext/react";
import logo from "../../../public/gsj-logo.png";
import pageStyles from "./page.module.scss";

export default function PageLayout({
  children, // will be a page or nested layout
  title,
}: {
  children: any[];
  title: string;
}) {
  return (
    <>
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
      <div className="app-container">
        <main className="page-center-grid">
          <article className={pageStyles.article}>
            <h1>{title}</h1>
            <PortableText value={children} />
          </article>
        </main>
        <footer className="app-footer">&copy; Footer Example</footer>
      </div>
    </>
  );
}

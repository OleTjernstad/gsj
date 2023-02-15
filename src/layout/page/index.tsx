import { Header } from "../header";
import { PortableText } from "@portabletext/react";
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
      <Header />
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

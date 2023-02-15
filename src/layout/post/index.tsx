import { Header } from "../header";
import { PortableText } from "@portabletext/react";
import pageStyles from "./page.module.scss";

export default function PostLayout({
  children, // will be a page or nested layout
  title,
  author,
  publishedAt,
}: {
  children: any[];
  title: string;
  author: string;
  publishedAt: string;
}) {
  return (
    <>
      <Header />
      <div className="app-container">
        <main className="page-center-grid">
          <article className={pageStyles.article}>
            <h1>{title}</h1>
            <span>{author}</span>
            <span>{publishedAt}</span>
            <PortableText value={children} />
          </article>
        </main>
        <footer className="app-footer">&copy; Footer Example</footer>
      </div>
    </>
  );
}

import { Header } from "../header";
import pageStyles from "./archive.module.scss";

export default function ArchiveLayout({
  children, // will be a page or nested layout
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <>
      <Header />
      <div className="app-container">
        <main className="page-center-grid">
          <article className={pageStyles.article}>
            <h1>{title}</h1>
            {children}
          </article>
        </main>
        <footer className="app-footer">&copy; Footer Example</footer>
      </div>
    </>
  );
}

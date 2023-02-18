import { Header } from "../header";
import { PortableText } from "@portabletext/react";
import { myPortableTextComponents } from "@/components/sanityImage";
import pageStyles from "./page.module.scss";

export default function PageLayout({
  children, // will be a page or nested layout
  portableText,
  title,
}: {
  children?: React.ReactNode;
  portableText?: any[];
  title: string;
}) {
  return (
    <>
      <Header />
      <div className="app-container">
        <main className="page-center-grid">
          <article className={pageStyles.article}>
            <>
              <h1>{title}</h1>
              {portableText ? (
                <PortableText
                  value={portableText}
                  components={myPortableTextComponents}
                />
              ) : children ? (
                children
              ) : null}
            </>
          </article>
        </main>
        <footer className="app-footer">&copy; Footer Example</footer>
      </div>
    </>
  );
}

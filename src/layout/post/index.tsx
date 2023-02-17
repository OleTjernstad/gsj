import { FormattedDate } from "@/components/date";
import { Header } from "../header";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/client";
import { myPortableTextComponents } from "@/components/sanityImage";
import styles from "./post.module.scss";
import { useNextSanityImage } from "next-sanity-image";

export default function PostLayout({
  children, // will be a page or nested layout
  title,
  author,
  publishedAt,
  excerpt,
  mainImage,
}: {
  children: any[];
  title: string;
  author: string;
  publishedAt: string;
  excerpt: any[];
  mainImage: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
}) {
  const imageProps = useNextSanityImage(client, mainImage);
  return (
    <>
      <Header />
      <div className="app-container">
        <main className="page-center-grid">
          <article className={styles.article}>
            <h1>{title}</h1>

            <figure className={styles.mainImage}>
              <Image
                {...imageProps}
                alt=""
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            </figure>
            <div className={styles.meta}>
              Av <span>{author}</span> <span>|</span>
              <span>
                <FormattedDate date={publishedAt} />
              </span>
            </div>
            <div className={styles.excerpt}>
              <PortableText value={excerpt} />
            </div>
            <PortableText
              value={children}
              components={myPortableTextComponents}
            />
          </article>
        </main>
        <footer className="app-footer">&copy; Footer Example</footer>
      </div>
    </>
  );
}

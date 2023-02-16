import { ICategory } from "@/pages";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/client";
import styles from "./postList.module.scss";
import { useNextSanityImage } from "next-sanity-image";

interface PostListBoxProps {
  title: string;
  author: string;
  authorSlug: { _type: string; current: string };
  excerpt: any[];
  tags: ICategory[];
  image: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  slug: string;
}
export function PostListBox({
  title,
  image,
  author,
  excerpt,
  tags,
  slug,
  authorSlug,
}: PostListBoxProps) {
  const imageProps = useNextSanityImage(client, image);
  return (
    <article className={styles.article}>
      <Link href={`/post/${slug}`}>
        <figure>
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
        <div>
          <h2>{title}</h2>

          <PortableText value={excerpt} />
        </div>
      </Link>
      <div className={styles.bottom}>
        <div className={styles.author}>
          Av <Link href={`/author/${authorSlug.current}`}>{author}</Link>
        </div>
        <div className={styles.tags}>
          {tags.map((tag) => (
            <Link key={tag.slug.current} href={`/category/${tag.slug.current}`}>
              {tag.title}
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}

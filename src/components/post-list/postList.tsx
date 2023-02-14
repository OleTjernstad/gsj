import Image from "next/image";
import { client } from "@/sanity/client";
import styles from "./postList.module.scss";
import { useNextSanityImage } from "next-sanity-image";

interface PostListBoxProps {
  title: string;
  author: string;
  image: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
}
export function PostListBox({ title, image, author }: PostListBoxProps) {
  const imageProps = useNextSanityImage(client, image);
  return (
    <article className={styles.article}>
      <a href="#">
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

          <p>
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit...
          </p>
        </div>
      </a>
      <div className={styles.bottom}>
        <div className={styles.author}>
          Av <a href="#">{author}</a>
        </div>
        <div className={styles.tags}>
          <a href="#">Quisquam</a>
          <a href="#">Dolorem</a>
        </div>
      </div>
    </article>
  );
}

import Image from "next/image";
import img from "../../../public/Bilde1.jpg";
import styles from "./postList.module.scss";

export function PostListBox() {
  return (
    <article className={styles.article}>
      <a href="#">
        <figure>
          <Image
            src={img}
            alt=""
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
            }}
          />
        </figure>
        <div>
          <h2>Lorem Ipsum</h2>

          <p>
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit...
          </p>
        </div>
      </a>
      <div className={styles.bottom}>
        <div>
          Av <a href="#">Forfatter</a>
        </div>
        <div className={styles.tags}>
          <a href="#">Quisquam</a>
          <a href="#">Dolorem</a>
        </div>
      </div>
    </article>
  );
}

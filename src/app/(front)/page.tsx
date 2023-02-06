import { PortableText } from "@portabletext/react";
import { PostListBox } from "../../components/post-list/postList";
import { Section } from "../../components/section/section";
import { client } from "@/sanity/client";
import styles from "./page.module.css";

export default async function Home() {
  const data = await getData();

  console.log(data.body);

  return (
    <main>
      <section className={styles.wrapper}>
        <video width="100%" autoPlay muted loop id="myVideo">
          <source src="/Do-you-hear-slutt.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        <h1
          className={
            styles.videoSectionCenter + " " + styles.videoSectionCenterTitle
          }
        >
          Glommasvingen Janitsjar
        </h1>
        <h2
          className={
            styles.videoSectionCenter + " " + styles.videoSectionCenterSubTitle
          }
        >
          Det lokale korpset for Kongsvinger og Sør-Odal
        </h2>
      </section>
      <div className={styles.page}>
        <Section>
          <article>
            <p>
              <PortableText value={data.body} />
            </p>
          </article>
        </Section>
        <Section>
          <PostListBox />
        </Section>
      </div>
    </main>
  );
}

export const revalidate = 604800; // revalidate every week

async function getData(): Promise<{
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: "page";
  _updatedAt: string;
  body: any[];
  title: string;
}> {
  const data = await client.fetch(`*[_type == "page"][0]`);
  console.log({ data, t: data.title });
  return data;
}

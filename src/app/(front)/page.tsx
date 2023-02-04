import { Section } from "./components/section";
import styles from "./page.module.css";

export default function Home() {
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
            <h2>Glommasvingen Janitsjar</h2>
            <p>
              det lokale korpset for Kongsvinger og Sør-Odal. Vi øver onsdager
              på Skarnes Videregående skole. I tillegg kommer enkelte seminarer
              og ekstraøvelser i forbindelse med konserter. Vi er rundt 25
              medlemmer, men vi mangler akkurat deg!!
            </p>
          </article>
        </Section>
      </div>
    </main>
  );
}

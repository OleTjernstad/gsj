import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <div className={styles.video}>
        <video width="100%" autoPlay muted loop id="myVideo">
          <source
            src="https://glommasvingen.no/wp-content/uploads/2020/02/Do-you-hear-slutt.mp4"
            type="video/mp4"
          />
          Your browser does not support HTML5 video.
        </video>
      </div>
    </main>
  );
}

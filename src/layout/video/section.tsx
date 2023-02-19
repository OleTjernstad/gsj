import { mdiPause, mdiPlay, mdiVolumeHigh, mdiVolumeMute } from "@mdi/js";
import { useRef, useState } from "react";

import Icon from "@mdi/react";
import styles from "./video.module.scss";

export function VideoSection() {
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  function handlePlayPause() {
    if (videoRef.current) {
      if (isPaused) {
        videoRef.current.play();
        setIsPaused(false);
        return;
      }
      videoRef.current.pause();
      setIsPaused(true);
      return;
    }
  }

  return (
    <section className={styles.wrapper}>
      <video
        ref={videoRef}
        width="100%"
        autoPlay={!isPaused}
        muted={isMuted}
        // loop
        id="myVideo"
        onPause={() => setIsPaused(true)}
      >
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
      <div className={styles.controls}>
        <button onClick={() => setIsMuted(!isMuted)}>
          <Icon path={isMuted ? mdiVolumeHigh : mdiVolumeMute} size={1} />
        </button>
        <button onClick={handlePlayPause}>
          <Icon path={isPaused ? mdiPlay : mdiPause} size={1} />
        </button>
      </div>
    </section>
  );
}

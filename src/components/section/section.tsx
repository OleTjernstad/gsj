import styles from "./section.module.scss";

export function Section({ children }: { children: React.ReactNode }) {
  return <section className={styles.section}>{children}</section>;
}

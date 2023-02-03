import styles from "./textBox.module.scss";

export function TextBox({ children }: { children: React.ReactNode }) {
  return <article className={styles.box}>{children}</article>;
}

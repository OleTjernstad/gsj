import styles from "./messageBox.module.scss";

interface MessageBoxProps {
  message: string | undefined;
  isError?: boolean;
}
export function MessageBox({ message, isError }: MessageBoxProps) {
  return (
    <p
      className={styles.message + " " + (isError ? styles.error : "")}
      aria-live="assertive"
    >
      {message}
    </p>
  );
}

import styles from "./input.module.scss";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  label: string;
}

export function Button({ label, onClick, type }: ButtonProps) {
  return (
    <div className={styles["input-container"]}>
      <button type={type}>{label}</button>
    </div>
  );
}

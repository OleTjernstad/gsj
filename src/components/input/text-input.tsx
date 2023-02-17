import styles from "./input.module.scss";

interface TextInputProps {}

export function TextInput({}: TextInputProps) {
  return (
    <div className={styles["input-container"]}>
      <label className="label" htmlFor="fname" id="label-fname">
        <div className="text">First Name</div>
      </label>
      <input
        type="text"
        id="fname"
        name="fname"
        value="Bar"
        aria-labelledby="label-fname"
      />
    </div>
  );
}

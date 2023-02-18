import styles from "./input.module.scss";

interface TextInputProps {
  value: string;
  type?: "email" | "number" | "password" | "tel" | "text";
  name: string;
  onChange: (value: string) => void;
  label: string;
  required?: boolean;
}

export function TextInput({
  name,
  type = "text",
  value,
  onChange,
  label,
  required,
}: TextInputProps) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    onChange(e.target.value);
  }
  return (
    <div className={styles["input-container"]}>
      <label className="label" htmlFor={name} id={`label-${name}`}>
        <div className="text">{label}</div>
      </label>
      <input
        onChange={handleChange}
        type={type}
        id={name}
        name={name}
        value={value}
        aria-labelledby={`label-${name}`}
        required={required}
      />
    </div>
  );
}
interface TextAreaProps {
  value: string;
  name: string;
  onChange: (value: string) => void;
  label: string;
  required?: boolean;
}

export function TextArea({
  name,
  value,
  onChange,
  label,
  required,
}: TextAreaProps) {
  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    onChange(e.target.value);
  }
  return (
    <div className={styles["input-container"]}>
      <label className="label" htmlFor={name} id={`label-${name}`}>
        <div className="text">{label}</div>
      </label>
      <textarea
        onChange={handleChange}
        id={name}
        name={name}
        value={value}
        aria-labelledby={`label-${name}`}
        required={required}
      ></textarea>
    </div>
  );
}

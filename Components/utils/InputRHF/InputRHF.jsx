"use client";
import styles from "./styles.module.scss";

const InputRHF = ({
  isRequired,
  id,
  label,
  type,
  placeholder,
  register,
  error,
}) => {
  return (
    <div className={styles.authInput}>
      <label htmlFor={id}>
        <span>{label}</span>
        {isRequired ? <span className={styles.star}>*</span> : null}
      </label>
      <div className={styles.inputBox}>
        <input id={id} type={type} placeholder={placeholder} {...register} />
      </div>
      <p className={styles.error}>{error ? error : ""}</p>
    </div>
  );
};

export default InputRHF;

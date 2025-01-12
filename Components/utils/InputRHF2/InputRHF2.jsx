"use client";
import { useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

const InputRHF2 = ({
  isRequired,
  id,
  label,
  type,
  placeholder,
  register,
  error,
  height,
  marginB,
}) => {
  const [inputType, setInputType] = useState(type);

  const handleChangeType = () => {
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  };
  return (
    <div className={styles.authInput}>
      <label htmlFor={id}>
        <span>{label}</span>
        {isRequired ? <span className={styles.star}>*</span> : null}
      </label>
      <div className={styles.inputBox} style={{ height: height }}>
        <input
          id={id}
          type={inputType}
          placeholder={placeholder}
          {...register}
        />
        {type === "password" ? (
          <div onClick={handleChangeType} className={styles.changeType}>
            {inputType === "password" ? (
              <Image src="/images/eye1.png" alt="eye" width={26} height={26} />
            ) : (
              <Image src="/images/eye2.png" alt="eye" width={26} height={26} />
            )}
          </div>
        ) : null}
      </div>
      <p className={styles.error} style={{ marginBottom: marginB }}>
        {error ? error : ""}
      </p>
    </div>
  );
};

export default InputRHF2;

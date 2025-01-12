import styles from "./styles.module.scss";
import { useRef, useState } from "react";
import { PhoneInput } from "react-international-phone";
import { PhoneNumberUtil } from "google-libphonenumber";
import "react-international-phone/style.css";

const phoneUtil = PhoneNumberUtil.getInstance();

const isPhoneValid = (phone) => {
  try {
    return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
  } catch (error) {
    return false;
  }
};

const PhoneNumberInput = ({ onChangePhone, label, isRequired }) => {
  const ref = useRef(null);

  const [phone, setPhone] = useState("");

  // console.log("Phone: ", phone);
  // console.log("dialCode: ", ref?.current?.state?.country?.dialCode);
  // console.log("key: ", ref?.current?.state?.inputValue?.split(" ")[0]);
  // console.log("phone-num: ", ref?.current?.state?.inputValue?.split(" ")[1]);

  const isValid = isPhoneValid(phone);

  const onChange = (phoneNum) => {
    setPhone(phoneNum);
    onChangePhone(
      !isValid,
      ref?.current?.state?.inputValue?.split(" ")[0],
      ref?.current?.state?.inputValue?.split(" ")[1]
    );
  };

  return (
    <div className={styles.phoneNumberInput}>
      <label className={styles.label}>
        <span>{label}</span>
        {isRequired ? <span className={styles.star}>*</span> : null}
      </label>
      <PhoneInput
        defaultCountry="se"
        value={phone}
        onChange={(phone) => onChange(phone)}
        forceDialCode={true}
        // historySaveDebounceMS={3000}
        ref={ref}
      />
      <div className={styles.phoneInpError}>
        {!isValid ? "Phone number is not valid" : ""}
      </div>
    </div>
  );
};

export default PhoneNumberInput;

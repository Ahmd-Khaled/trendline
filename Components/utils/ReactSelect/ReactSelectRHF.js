import Select from "react-select";
import { Controller } from "react-hook-form";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";

const selectStyles = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    borderColor: state.isFocused ? "#FFFFFF14" : "#FFFFFF0F",
    backgroundColor: "#FFFFFF14",
    width: "200px",
    fontSize: "14px",
  }),
};

const ReactSelectRHF = ({
  options,
  placeholder,
  classNamePrefix,
  label,
  error,
  defaultValue,
  isRequired,
  control,
  name,
}) => {
  // const [defaultVal, setDefaultVal] = useState(defaultValue);
  // useEffect(() => {
  //   setDefaultVal(defaultValue);
  // }, [defaultValue]);
  return (
    <div className="flex-1 w-full">
      {label ? (
        <label className={styles.selectLabel}>
          <span>{label}</span>
          {isRequired ? <span className={styles.star}>*</span> : null}
        </label>
      ) : null}

      <Controller
        name={name}
        control={control}
        render={({
          field: { onChange, onBlur, value, name, ref },
          fieldState: { invalid, isTouched, isDirty, error },
          formState,
        }) => (
          <Select
            inputRef={ref}
            options={options}
            value={options.find((c) => c.value === value)}
            onChange={(val) => onChange(val.value)}
            name={name}
            styles={selectStyles}
            classNamePrefix={classNamePrefix}
            isSearchable={true}
            placeholder={placeholder}
            defaultValue={defaultValue}
            // defaultInputValue={defaultValue}
          />
        )}
        rules={{ required: true }}
      />

      <p className={styles.error}>{error ? error : ""}</p>
    </div>
  );
};

export default ReactSelectRHF;

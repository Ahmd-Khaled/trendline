import Select from "react-select";
import styles from "./styles.module.scss";

const selectStyles = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    borderColor: state.isFocused ? "#FFFFFF14" : "#FFFFFF0F",
    backgroundColor: "#FFFFFF14",
    width: "200px",
    fontSize: "14px",
  }),
};

const ReactSelect2 = ({
  optionsList,
  onChange,
  placeholder,
  classNamePrefix,
  label,
  error,
  defaultValue,
  isRequired,
}) => {
  return (
    <div className="flex-1 w-full">
      {label ? (
        <label className={styles.selectLabel}>
          <span>{label}</span>
          {isRequired ? <span className={styles.star}>*</span> : null}
        </label>
      ) : null}
      <Select
        options={Object.entries(optionsList)?.map(([key, val] = entry) => {
          return {
            value: val?.id,
            label: val?.name,
          };
        })}
        styles={selectStyles}
        classNamePrefix={classNamePrefix}
        isSearchable={true}
        placeholder={placeholder}
        onChange={onChange}
        defaultValue={defaultValue}
        defaultInputValue={defaultValue}
      />
      <p className={styles.error}>{error ? error : ""}</p>
    </div>
  );
};

export default ReactSelect2;

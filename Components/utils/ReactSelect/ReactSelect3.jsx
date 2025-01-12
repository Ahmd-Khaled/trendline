import Select from "react-select";

const selectStyles = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    borderColor: state.isFocused ? "#FFFFFF14" : "#FFFFFF0F",
    backgroundColor: "#FFFFFF14",
    width: "200px",
    fontSize: "14px",
  }),
};

const ReactSelect3 = ({
  optionsList,
  onChanged,
  placeholder,
  classNamePrefix,
  label,
}) => {
  return (
    <div className="w-full">
      {label ? <label className="flex mb-2 text-white ">{label}</label> : null}
      <Select
        options={Object.entries(optionsList)?.map(([key, val] = entry) => {
          return {
            value: val?.id,
            label: val?.name,
          };
        })}
        defaultValue={10}
        styles={selectStyles}
        classNamePrefix={classNamePrefix}
        isSearchable={true}
        placeholder={placeholder}
        onChange={onChanged}
      />
    </div>
  );
};

export default ReactSelect3;

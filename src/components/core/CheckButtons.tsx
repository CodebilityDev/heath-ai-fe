const CheckButtons = ({
  options,
  value,
  type,
  handleChange,
}: {
  options: string[];
  type?: string;
  value?: string;
  handleChange?: any;
}) => {
  return (
    <div className="form-check-buttons-container">
      {options.map((option: string, idx: number) => {
        return (
          <div
            className={option != value ? "check-btn" : "check-btn-checked"}
            key={idx}
            onClick={(e) => handleChange(e, type)}
          >
            {option}
          </div>
        );
      })}
    </div>
  );
};

export default CheckButtons;

const CheckBox = ({
  checked,
  label,
  type,
  handleChange,
}: {
  checked: boolean;
  label: string;
  type: string;
  handleChange: any;
}) => {
  return (
    <div className="flex items-center">
      <div onClick={(e) => handleChange(e, label, type)}>
        {checked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
              fill="#624FF6"
            />
            <path
              d="M7.75 11.9999L10.58 14.8299L16.25 9.16992"
              stroke="white"
              strokeWidth={"1.5"}
              strokeLinecap={"round"}
              strokeLinejoin={"round"}
            />
          </svg>
        )}
        {!checked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
              stroke="#747E83"
              strokeWidth={"1.5"}
              strokeLinecap={"round"}
              strokeLinejoin={"round"}
            />
          </svg>
        )}
      </div>
      <label className="text-xs md:text-sm ml-2">{label}</label>
    </div>
  );
};

export default CheckBox;

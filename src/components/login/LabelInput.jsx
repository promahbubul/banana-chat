const LabelInput = ({
  label,
  onChange,
  type,
  Icon,
  placeholder,
  className,
}) => {
  return (
    <div className={className}>
      <label htmlFor="" className="text-[#a3adbb] text-base">
        {label}:
      </label>
      <div className="text-[#697a9b] flex flex-row mt-2   py-1 px-2 rounded-md border border-[#697a9b]">
        {Icon && <Icon className="text-[#697a9b]" />}
        <input
          placeholder={placeholder}
          type={type ? type : "text"}
          onChange={onChange}
          className="outline-none w-full pl-2 text-[#a3adbb] placeholder:text-[#697a9b]"
        />
      </div>
    </div>
  );
};
export default LabelInput;

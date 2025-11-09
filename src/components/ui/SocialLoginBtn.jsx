const SocialLoginBtn = ({ Icon, title, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="border justify-center py-2 w-full rounded-lg cursor-pointer flex flex-row items-center gap-3 border-[#697a9b]"
    >
      <div className="">{Icon && <Icon />}</div>
      <p className="text-white font-medium text-base">{title}</p>
    </div>
  );
};
export default SocialLoginBtn;

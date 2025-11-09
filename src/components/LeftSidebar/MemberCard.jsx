const MemberCard = () => {
  return (
    <div className="flex hover:bg-[#313e59] px-3 py-2 cursor-pointer flex-row items-center justify-between">
      <div className="flex flex-row items-center gap-1">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img
            src="https://lineone.piniastudio.com/images/avatar/avatar-19.jpg"
            alt=""
            className=""
          />
        </div>
        <div className="">
          <p className="text-[#a3adc2] font-semibold text-sm">Alfredo Elliott</p>
          <p className="text-[#697a9b] text-xs font-normal">😂 Lorem ipsum</p>
        </div>
      </div>
      <div className="flex flex-col  gap-1 items-end">
        <p className="text-[#697a9b] text-sm">11:03</p>
        <div className="bg-[#465675] text-white w-5 h-5 flex justify-center items-center rounded-full ">
          <p className="text-sm font-semibold">5</p>
        </div>
      </div>
    </div>
  );
};
export default MemberCard;

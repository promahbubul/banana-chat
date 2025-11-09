import { ChevronLeft } from "lucide-react";

const Header = () => {
  return (
    <div className="bg-[#202b40] py-2 px-5">
      <div className="flex flex-row gap-7 items-center">
        <button className="cursor-pointer">
          <ChevronLeft color="#6d79d3" />
        </button>
        <div className="flex flex-row items-center gap-4">
          <div className="w-12 rounded-full overflow-hidden h-12">
            <img
              src="https://lineone.piniastudio.com/images/avatar/avatar-19.jpg"
              alt=""
            />
          </div>
          <div className="">
            <p className="text-[#c2c9d6] font-semibold text-base">Alfredo Elliott</p>
            <p className="text-[#a3adc2] font-normal text-sm"> Last seen recently</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;

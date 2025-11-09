import { Plus } from "lucide-react";

const History = () => {
  return (
    <div>
      <div className="text-[#a3adc2] flex flex-row items-center justify-between px-3">
        <p className="">History</p>
        <button className="cursor-pointer">
          <Plus size={16} />
        </button>
      </div>
      <div className="px-2 mt-2 pb-4 flex flex-row items-center gap-2 overflow-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
          <div className="">
            <div className="relative w-10 h-10 rounded-full p-0.5 bg-linear-to-r from-[#ae49ff] to-[#f44a00]">
              <div className="w-full h-full rounded-full bg-[#222e45] p-0.5 ">
                <img
                  src="https://lineone.piniastudio.com/images/avatar/avatar-20.jpg"
                  alt="avatar"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
            <p className="text-[#a3adc2]  font-semibold text-sm mt-1">Konnor</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default History;

import { MessageSquareMore } from "lucide-react";

const Header = () => {
  return (
    <div className="flex flex-row px-3 items-center gap-4 py-5">
      <div className="bg-[#2c3757] p-2 w-max rounded-full">
        <MessageSquareMore color="#818cf8" size={18} />
      </div>
      <h2 className="text-xl font-semibold text-[#c2c9d6]">Chat</h2>
    </div>
  );
};
export default Header;

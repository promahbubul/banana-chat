import { Paperclip, SendHorizontal, Smile } from "lucide-react";
import socket from "../../socket";
import useDashboardStore from "../../store/useDashboardStore";

const SendMessage = () => {
  const { message, setMessage } = useDashboardStore();
  const handleSendMessage = () => {
    socket.emit("message", message);
    setMessage("");
  };
  return (
    <div className="py-2 px-5 flex border-t border-t-[#313e59] flex-row bg-[#202b40] items-center gap-5">
      <div className="flex flex-row items-center gap-1 w-full">
        <button
          onClick={handleSendMessage}
          className="cursor-pointer rounded-full hover:bg-[#818df822] p-2 hover:scale-95 active:scale-105 transition-all  "
        >
          <Paperclip color="#919bb0" />
        </button>
        <input
          value={message}
          onChange={(e) => setMessage(e?.target?.value)}
          type="text"
          placeholder="Write the message"
          className=" bg-transparent text-lg px-5 caret-white text-[#6f7e94]  placeholder:text-[#6f7e94] w-full outline-none h-full "
        />
      </div>
      <div className="flex flex-row items-center gap-1">
        <button
          onClick={handleSendMessage}
          className="cursor-pointer rounded-full hover:bg-[#818df822] p-2 hover:scale-95 active:scale-105 transition-all  "
        >
          <Smile color="#919bb0" />
        </button>
        <button
          onClick={handleSendMessage}
          className="cursor-pointer rounded-full hover:bg-[#818df822] p-2 hover:scale-95 active:scale-105 transition-all  "
        >
          <SendHorizontal color="#818cf8" />
        </button>
      </div>
    </div>
  );
};
export default SendMessage;

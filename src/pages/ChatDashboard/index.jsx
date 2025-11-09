import useSound from "use-sound";
import { useEffect } from "react";
import sentAudio from "../../assets/audio/sent.mp3";
import toast, { Toaster } from "react-hot-toast";
import useDashboardStore from "../../store/useDashboardStore";
import socket from "../../socket";
import LeftSidebar from "../../components/LeftSidebar";
import Dashboard from "../../components/Dashboard";

const ChatDashboard = () => {
  const [playSent] = useSound(sentAudio, { volume: 1 });
  const { setMessages } = useDashboardStore();

  useEffect(() => {
    socket.on("message1", (values) => {
      toast.success("New message", { position: "top-right" });
      playSent();
      setMessages(values);
    });
    socket.on("getMessages", (values) => {
      setMessages(values);
    });

    return () => {
      socket.off("message1");
      socket.off("getMessages");
    };
  }, [playSent, setMessages]);
  return (
    <div>
      <div className="flex flex-row h-screen   ">
        <LeftSidebar />
        <Dashboard />
      </div>
      <Toaster />
    </div>
  );
};
export default ChatDashboard;

// console.log()
//

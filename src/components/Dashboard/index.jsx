import useDashboardStore from "../../store/useDashboardStore";
import { SendHorizontal } from "lucide-react";
import SendMessage from "./SendMessage";
import Header from "./Header";

const Dashboard = () => {
  const { messages } = useDashboardStore();

  return (
    <div className="w-full bg-[#192132]  h-full">
      <Header />
      <div className="h-[calc(100%-121px)]  p-5 flex flex-col justify-end items-end gap-5 ">
        {messages?.map((m, i) => (
          <div className="">
            <div
              key={i}
              className="bg-[#26334d] rounded-r-xl rounded-bl-xl  w-max text-[#c2c9d6]  px-3 py-2 text-base "
            >
              {m?.title}
            </div>
            <p className="text-[#697a9b] text-sm text-right mt-0.5">08:16</p>
          </div>
        ))}
      </div>
      <SendMessage />
    </div>
  );
};
export default Dashboard;

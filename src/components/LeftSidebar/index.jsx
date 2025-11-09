import Header from "./Header";
import History from "./History";
import Members from "./Members";

const LeftSidebar = () => {
  return (
    <div className="w-[280px] bg-[#222e45] h-full">
      <Header />
      <History />
      <Members />
    </div>
  );
};
export default LeftSidebar;

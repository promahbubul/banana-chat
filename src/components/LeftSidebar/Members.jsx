import MemberCard from "./MemberCard";

const Members = () => {
  return (
    <div className="">
      {/* Card Container */}
      <div className="">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
          <MemberCard />
        ))}
      </div>
    </div>
  );
};
export default Members;

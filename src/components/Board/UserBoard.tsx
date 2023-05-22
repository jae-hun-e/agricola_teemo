import FarmBox from "@components/Box/FarmBox";
import RoomBox from "@components/Box/RoomBox";

const UserBoard = () => {
  return (
    <div
      className="w-[598px] h-[368px] bg-demo2
  grid grid-cols-5 grid-rows-3 gap-[13px] p-[14px]"
    >
      <FarmBox />
      <FarmBox />
      <FarmBox />
      <FarmBox />
      <FarmBox />
      <RoomBox />
      <FarmBox />
      <FarmBox />
      <FarmBox />
      <FarmBox />
      <RoomBox />
      <FarmBox />
      <FarmBox />
      <FarmBox />
      <FarmBox />
    </div>
  );
};
export default UserBoard;

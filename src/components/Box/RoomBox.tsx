interface Prop {
  idx: number;
  house_type: string;
}

const RoomBox = ({ idx, house_type }: Prop) => {
  // fence : top, right, bottom, left
  const fence = [1, 2, 3, 4];
  console.log(house_type);
  return (
    <div
      className="w-[100px] h-[100px] flex justify-center items-center"
      style={{
        backgroundColor: `${
          house_type === "wood"
            ? "#8B4513"
            : house_type === "clay"
            ? "#FFDAB9"
            : "#808080"
        }`,
      }}
    >
      {house_type === "wood"
        ? "나무집"
        : house_type === "clay"
        ? "흙집"
        : "돌집"}
    </div>
  );
};

export default RoomBox;

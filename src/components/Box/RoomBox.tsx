interface Prop {
  idx: number;
}

const RoomBox = ({ idx }: Prop) => {
  // fence : top, right, bottom, left
  const fence = [1, 2, 3, 4];
  return (
    <div className="bg-demo w-[100px] h-[100px] flex justify-center items-center">
      방
    </div>
  );
};

export default RoomBox;

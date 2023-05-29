interface Prop {
  idx: number;
}
const FarmBox = ({ idx }: Prop) => {
  return (
    <div className="bg-demo w-[100px] h-[100px]  flex justify-center items-center">
      농장{idx}
    </div>
  );
};

export default FarmBox;

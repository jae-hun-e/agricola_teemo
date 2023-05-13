interface Props {
  name: string;
  direction: string;
}
const AccumlatedBox = ({ name, direction }: Props) => {
  return (
    <div className="w-[100px] h-[70px] bg-demo cursor-pointer">
      {direction === "right" ? (
        <div className="flex justify-around ">
          <p>Acc</p>
          <p> | </p>
          <p>{name}</p>
        </div>
      ) : (
        <div className="flex justify-around ">
          <p>{name}</p>
          <p> | </p>
          <p>Acc</p>
        </div>
      )}
    </div>
  );
};

export default AccumlatedBox;

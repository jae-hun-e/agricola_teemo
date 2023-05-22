interface Props {
  name: string;
  direction: string;
}
const AccumlatedBox = ({ name, direction }: Props) => {
  return (
    <div className="w-[100px] h-[70px] bg-demo cursor-pointer">
      {direction === "right" ? (
        <div className="flex justify-around h-full">
          <p className="w-1/2 bg-demo2 flex justify-center items-center">
            <div className="bg-demo w-[20px] h-[30px]" />
            <div className="ml-1">←</div>
          </p>
          <p className="w-1/2 flex justify-center items-center">{name}</p>
        </div>
      ) : (
        <div className="flex justify-around h-full">
          <p className="w-1/2 flex justify-center items-center">{name}</p>
          <p className="w-1/2 bg-demo2 flex justify-center items-center">
            <div className="mr-1">→</div>
            <div className="bg-demo w-[20px] h-[30px]" />
          </p>
        </div>
      )}
    </div>
  );
};

export default AccumlatedBox;

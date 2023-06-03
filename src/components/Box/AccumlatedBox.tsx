interface Props {
  name: string;
  direction: string;
  imgidx?: string;
}

// 쌓이는 개수 표시해야함
const AccumlatedBox = ({name, direction, imgidx}: Props) => {
  return (
    <div className="w-[100px] h-[70px] cursor-pointer">
      {direction === "right" ? (
        <div className="flex justify-around h-full">
          {/* <div className="w-1/2 bg-demo2 flex justify-center items-center">
            <div className="bg-demo w-[20px] h-[30px]" />
            <div className="ml-1">←</div>
          </div> */}
          <img
            src={`/images/mainboard/${imgidx}1.png`}
            alt=""
            className="w-1/2 flex justify-center items-center rounded-l"
          />
          {/* <p className="w-1/2 flex justify-center items-center">{name}</p> */}
          <img
            src={`/images/mainboard/${imgidx}.png`}
            alt=""
            className="w-1/2 flex justify-center items-center rounded-r"
          />
        </div>
      ) : (
        <div className="flex justify-around h-full">
          {/* <p className="w-1/2 flex justify-center items-center">{name}</p> */}
          <img
            src={`/images/mainboard/${imgidx}.png`}
            alt=""
            className="w-1/2 flex justify-center items-center rounded-l"
          />
          {/* <div className="w-1/2 bg-demo2 flex justify-center items-center">
            <div className="mr-1">→</div>
            <div className="bg-demo w-[20px] h-[30px]" />
          </div> */}
          <img
            src={`/images/mainboard/${imgidx}1.png`}
            alt=""
            className="w-1/2 flex justify-center items-center rounded-r"
          />
        </div>
      )}
    </div>
  );
};

export default AccumlatedBox;

import {cls} from "@utils/util";

interface Props {
  layout?: string;
  name: string;
  imgidx?: string;
}
const ActionBox = ({layout, name, imgidx}: Props) => {
  return (
    <div>
      <img
        src={`/images/mainboard/${imgidx}.png`}
        alt=""
        className={cls("w-[100px] rounded-md cursor-pointer", layout ? layout : "h-[70px]")}
      />
    </div>
  );
};

export default ActionBox;

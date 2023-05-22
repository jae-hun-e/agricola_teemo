import { cls } from "@utils/util";

interface Props {
  layout?: string;
  name: string;
}
const ActionBox = ({ layout, name }: Props) => {
  return (
    <div
      className={cls(
        "w-[100px]  bg-demo cursor-pointer",
        layout ? layout : "h-[70px]"
      )}
    >
      <p>Act : {name}</p>
    </div>
  );
};

export default ActionBox;

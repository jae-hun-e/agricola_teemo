import { cls } from "@utils/util";

interface Props {
  layout?: string;
  name: string;
}
const ActionBox = ({ layout, name }: Props) => {
  return (
    <div
      className={cls(
        "w-[100px] h-[70px] bg-demo cursor-pointer",
        layout ? layout : ""
      )}
    >
      <p>Act : {name}</p>
    </div>
  );
};

export default ActionBox;

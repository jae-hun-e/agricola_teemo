import OtherPlayerButton from "@components/Button/OtherPlayerButton";
import { cls } from "@utils/util";
interface Props {
  direction: string;
}

const UserSubBoard = ({ direction }: Props) => {
  return (
    <div
      className={cls(
        "",
        direction === "left" || direction === "right"
          ? "flex flex-col w-[90px] h-[688px]"
          : "flex flex-row h-[90px] w-[688px]"
      )}
    >
      <OtherPlayerButton />
      <div
        className={cls(
          "bg-demo",
          direction === "left" || direction === "right"
            ? "w-[90px] h-[598px]"
            : "w-[598px] h-[90px]"
        )}
      ></div>
    </div>
  );
};

export default UserSubBoard;

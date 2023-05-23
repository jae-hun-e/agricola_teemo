import OtherPlayerButton from "@components/Button/OtherPlayerButton";
import { cls } from "@utils/util";
interface Props {
  direction: string;
}

const UserSubBoard = ({ direction }: Props) => {
  const material: string[] = [
    "나무",
    "흙",
    "돌",
    "갈대",
    "곡식종자",
    "채소종자",
    "양",
    "돼지",
    "소",
    "음식",
    "울타리",
    "외양간",
    "가족",
  ];
  return (
    <div
      className={cls(
        "",
        direction === "left" || direction === "right"
          ? "flex flex-col w-[90px] h-[688px] "
          : "flex flex-row h-[90px] w-[688px]"
      )}
    >
      <OtherPlayerButton direction={direction} />
      <div
        className={cls(
          "bg-demo text-xs",
          direction === "left" || direction === "right"
            ? "w-[90px] h-[598px]"
            : "w-[598px] h-[90px] flex"
        )}
      >
        {material.map((m, idx) => (
          <div
            key={idx}
            className={cls(
              "flex justify-center items-center",
              direction === "left" ? "flex-row" : "",
              direction === "right" ? "flex-row-reverse" : "",
              direction === "top" ? "flex-col" : "",
              direction === "bottom" ? "flex-col-reverse" : ""
            )}
          >
            <p
              className={cls(
                "bg-demo2",
                "flex justify-center items-center",
                direction === "left" ? "w-[50px] h-[46px]" : "",
                direction === "right" ? "w-[50px] h-[46px]" : "",
                direction === "top" ? "h-[50px] w-[46px]" : "",
                direction === "bottom" ? "h-[50px] w-[46px]" : ""
              )}
            >
              {/* TODO 실제 데이터 넣기*/}
              {m === "울타리"
                ? "0/15"
                : m === "외양간"
                ? "0/4"
                : m === "가족"
                ? "2/5"
                : "0"}
            </p>
            <p
              className={cls(
                "flex justify-center items-center",
                direction === "left" ? "w-[40px] h-[46px]" : "",
                direction === "right" ? "w-[40px] h-[46px]" : "",
                direction === "top" ? "h-[40px] w-[46px]" : "",
                direction === "bottom" ? "h-[40px] w-[46px]" : ""
              )}
            >
              {m}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserSubBoard;

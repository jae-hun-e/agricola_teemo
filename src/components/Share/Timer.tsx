import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { cls } from "@utils/util";

interface Prop {
  time: number;
  roomId: number;
}
export default function Timer({ time, roomId }: Prop) {
  const [lastTime, setLastTime] = useState<number>(time);
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      if (lastTime <= 0) {
        if (Number(router.query.id) !== 3) {
          return router
            .push(`/play/${roomId}`)
            .then(() =>
              alert(
                `게임을 시작하겠습니다. \n roodNumber: ${roomId} 방으로 이동합니다.`
              )
            );
        }
      }
      setLastTime(lastTime - 1);
    }, 1000);
  }, [lastTime]);

  return (
    <div
      className={cls(
        "block",
        "z-30 bg-black bg-opacity-40 flex justify-center items-center fixed top-0 left-0 w-full h-full"
      )}
    >
      <div
        className={cls(
          "w-1/2 h-1/3  flex justify-center items-start font-bold text-9xl",
          `text-red-${Math.abs(lastTime - 7)}00`
        )}
      >
        {lastTime}
      </div>
    </div>
  );
}

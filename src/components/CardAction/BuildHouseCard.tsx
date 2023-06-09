import {useEffect, useState} from "react";
import Image from "next/image";
import {cls} from "@utils/util";
import UserBoard from "@components/Board/UserBoard";

interface BuildHouseCardProps {
    cardNumber: string;
}

const BuildHouseCard = ({cardNumber}: BuildHouseCardProps) => {
    const [isLeft, setIsLeft] = useState<boolean | undefined>(undefined);

    useEffect(() => {
        setIsLeft(undefined);
    }, [])

    if (isLeft === undefined) {
        return <div className="flex flex-col justify-center items-center gap-3">
            <div className="flex gap-3 flex-row h-full my-16 space-x-10">
                <div className="flex flex-col justify-center items-center" onClick={() => setIsLeft(false)}>
                    <div className="flex justify-center items-center text-lg">방 만들기</div>
                </div>
                <div className="flex flex-col justify-center items-center" onClick={() => setIsLeft(true)}>
                    <div className="flex justify-center items-center text-lg">외양간 짓기</div>
                </div>
            </div>
        </div>;
    }

    return <div className="flex flex-col justify-center items-center">
        <div className="flex flex-row w-full justify-between items-center">
            <div onClick={() => setIsLeft(undefined)}>
                <Image src="/icon/back.png" alt="back icon" height={16} width={16}/>
            </div>
            <p className="mt-[10px]">농장 확장</p>
            <p></p>
        </div>
        <div className="relative flex justify-center">
            {isLeft ? (
                <UserBoard owner={0} type={cardNumber} />
            ) : (<UserBoard owner={0} type={cardNumber} />)}
        </div>
    </div>
}

export default BuildHouseCard;
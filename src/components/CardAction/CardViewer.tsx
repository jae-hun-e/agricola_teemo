import {openJobAdditional} from "@constants/cardCase";
import {cls} from "@utils/util";
import {ICards, IPrimaryCards} from "@ITypes/play";
import {useEffect, useState} from "react";
import Image from "next/image";

interface CardViewerProps {
    title: string;
    cards: ICards[];
    primaryCards: IPrimaryCards[];
    selectedCard: string;
    onClick: (data: any) => void;
}

const CardViewers = ({title, cards = [], primaryCards = [], selectedCard, onClick}: CardViewerProps) => {
    const [isSub, setIsSub] = useState<boolean | undefined>(undefined);
    const [viewCards, setViewCards] = useState<any[]>([]);
    const isBothCards = cards.length > 0 && primaryCards.length > 0;

    console.log(isSub);
    console.log(viewCards)
    console.log(primaryCards)

    useEffect(() => {
        setIsSub(undefined);
    }, [])

    useEffect(() => {
        if (isSub !== undefined) {
            setViewCards(isSub ? cards : primaryCards);
        }
    }, [isSub, cards, primaryCards])

    if (isBothCards && isSub === undefined) {
        return <div className="flex flex-col justify-center items-center gap-3">
            <div className="flex gap-3 flex-row h-full my-16 space-x-10">
                <div className="flex flex-col justify-center items-center" onClick={() => setIsSub(false)}>
                    <div className="flex justify-center items-center text-lg">주요 설비 카드 선택</div>
                    <Image src="/assets/PRI_FAC_01.png" width={250} height={180}/>
                </div>
                <div className="flex flex-col justify-center items-center" onClick={() => setIsSub(true)}>
                    <div className="flex justify-center items-center text-lg">보조 설비 카드 선택</div>
                    <Image src="/assets/SUB_FAC_01.png" width={250} height={180}/>
                </div>
            </div>
        </div>;
    }



    return <div className="flex flex-col justify-center items-center">
        <div className="flex flex-row w-full justify-between items-center">
            <div onClick={() => setIsSub(undefined)}>
                {isBothCards && <Image src="/icon/back.png" alt="back icon" height={16} width={16}/>}
            </div>
            <p className="mt-[10px]">
                {title}
            </p>
            <p></p>
        </div>
        <div className="relative flex justify-center">
            <div className="grid grid-cols-4 gap-[10px] mt-[20px]">
                {viewCards.map((data, i) => (
                    <div
                        key={i}
                        className={cls(
                            "w-[136px] h-[212px] bg-cover rounded-md bg-center bg-no-repeat",
                            "border-solid border-red-500",
                            data.card_number === selectedCard || data.is_used
                                ? "border-[5px]"
                                : ""
                        )}
                        style={{
                            backgroundImage: `url('/assets/${data.card_number}.png')`,
                        }}
                        onClick={() => onClick(data.card_number)}
                    ></div>
                ))}
            </div>
        </div>
    </div>
}

export default CardViewers;
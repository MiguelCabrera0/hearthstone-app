'use client';

import { useMemo, useState } from "react";
import { Card } from "../utilities/types";
import CardComponent from "./CardComponent";
import ArrowRight from "@/public/assets/Arrow right@3x.png";
import ArrowLeft from "@/public/assets/Arrow left@3x.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { searchSingularParam } from "../utilities/functions";
import BorderGoldenBox from "./BorderGoldenBox";

export default function CardNavigator({ cards, page, pageCount, cardCount, searchParams }: Readonly<{
    cards: Card[];
    page: number;
    pageCount: number;
    cardCount: number;
    searchParams: { [key: string]: string | string[] | undefined }
}>) {
    const router = useRouter();
    const [cardMobileIndex, setCardMobileIndex] = useState(0);
    const curCardNumber = useMemo(() => (page - 1) * 8 + cardMobileIndex + 1, [page, cardMobileIndex]);
    const pages = useMemo(() => {
        let start = page - 2;
        let final = 1;
        if (page <= pageCount) {
            if (start < 1) {
                final = 6;
                start = 1;
            } else {
                final = page + 3;
            }
            if (final > pageCount) {
                final = pageCount + 1;
            }
        } else {
            start = pageCount;
            final = pageCount + 2;
        }
        return new Array(final - start)
            .fill(null)
            .map((_, index) => start + index);
    }, [page, pageCount]);
    const cardArray = useMemo(() => {
        let start = curCardNumber - 2;
        let final = 1;
        if (curCardNumber <= cardCount) {
            if (start < 1) {
                final = 6;
                start = 1;
            } else {
                final = curCardNumber + 3;
            }
            if (final > cardCount) {
                final = cardCount + 1;
            }
        } else {
            start = cardCount;
            final = cardCount + 2;
        }
        return new Array(final - start)
            .fill(null)
            .map((_, index) => start + index);
    }, [curCardNumber, cardCount]);
    const handleNext = () => searchSingularParam({
        router,
        searchParams,
        type: 'page',
        value: String(page + 1),
    });
    const handlePrev = () => searchSingularParam({
        router,
        searchParams,
        type: 'page',
        value: String(page - 1),
    });
    const handleDirectNavigate = (pag: string) => searchSingularParam({
        router,
        searchParams,
        type: 'page',
        value: pag,
    });
    const handleMobilePrev = () => {
        if (cardMobileIndex === 0 && page > 1) {
            setCardMobileIndex(7);
            handlePrev();
        } else if (cardMobileIndex !== 0) {
            setCardMobileIndex(cardMobileIndex - 1);
        }
    };
    const handleMobileNext = () => {
        if (curCardNumber < cardCount) {
            if (cardMobileIndex === 7 && page < pageCount) {
                setCardMobileIndex(0);
                handleNext();
            } else if (cardMobileIndex !== 7) {
                setCardMobileIndex(cardMobileIndex + 1);
            }
        }
    };
    const handleMobileDirect = (card: number) => {
        const cardPage = Math.ceil(card / 8);
        const cIdx = (card - 1) % 8;
        if (cardPage === page) {
            setCardMobileIndex(cIdx);
        } else {
            setCardMobileIndex(cIdx);
            handleDirectNavigate(String(cardPage))
        }
    };
    return (
        <div className="h-full">
            <div className="hidden md:flex">
                {page > 1
                    ? (<button onClick={handlePrev}>
                        <Image
                            src={ArrowLeft}
                            alt="left"
                            width={102}
                            height={102}
                        />
                    </button>)
                    : <div className="w-[102px]" />
                }
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full mb-8">
                    {cards.map((card) => (
                        <CardComponent
                            key={card.slug}
                            card={card}
                        />
                    ))}
                </div>
                {page < pageCount
                    ? (<button onClick={handleNext}>
                        <Image
                            src={ArrowRight}
                            alt="left"
                            width={102}
                            height={102}
                        />
                    </button>)
                    : <div className="w-[102px]" />
                }
            </div>
            <div className="hidden md:flex mb-8 w-full justify-center items-center space-x-12">
                {pages[0] !== 1 && (
                    <>
                        <button onClick={() => handleDirectNavigate("1")}>
                            1
                        </button>
                        <span>
                            ...
                        </span>
                    </>
                )}
                {pages.map((pag) => pag === page
                    ? (
                        <button onClick={() => handleDirectNavigate(String(pag))}>
                            <BorderGoldenBox>
                                {pag}
                            </BorderGoldenBox>
                        </button>
                    )
                    : (
                        <button onClick={() => handleDirectNavigate(String(pag))}>
                            {pag}
                        </button>
                    )
                )}
                {pages[pages.length - 1] !== pageCount && (
                    <>
                        <span>
                            ...
                        </span>
                        <button onClick={() => handleDirectNavigate(String(pageCount))}>
                            {pageCount}
                        </button>
                    </>
                )}
            </div>
            <div className="flex justify-center md:hidden">
                <button onClick={handleMobilePrev}>
                    <Image
                        src={ArrowLeft}
                        alt="left"
                        width={48}
                        height={48}
                    />
                </button>
                {cards[cardMobileIndex] && (
                    <CardComponent
                        card={cards[cardMobileIndex]}
                    />
                )}
                <button onClick={handleMobileNext}>
                    <Image
                        src={ArrowRight}
                        alt="left"
                        width={48}
                        height={48}
                    />
                </button>
            </div>
            <div className="flex md:hidden mb-8 w-full justify-center items-center space-x-5 text-xs mt-36 bottom-0 max-h-5/6 flex-wrap">
                {cardArray[0] !== 1 && (
                    <>
                        <button onClick={() => handleMobileDirect(1)}>
                            1
                        </button>
                        <span>
                            ...
                        </span>
                    </>
                )}
                {cardArray.map((cd) => cd === curCardNumber
                    ? (
                        <button className="hover:bg-blue-700" onClick={() => handleMobileDirect(cd)}>
                            <BorderGoldenBox>
                                {cd}
                            </BorderGoldenBox>
                        </button>
                    )
                    : (
                        <button className="hover:bg-blue-700" onClick={() => handleMobileDirect(cd)}>
                            {cd}
                        </button>
                    )
                )}
                {cardArray[cardArray.length - 1] !== cardCount && (
                    <>
                        <span>
                            ...
                        </span>
                        <button onClick={() => handleMobileDirect(cardCount)}>
                            {cardCount}
                        </button>
                    </>
                )}
            </div>
        </div >
    )
};
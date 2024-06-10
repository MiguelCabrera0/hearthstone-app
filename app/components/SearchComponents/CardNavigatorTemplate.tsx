'use client';

import CardComponent from "../CardComponent";
import ArrowRight from "@/public/assets/Arrow right@3x.png";
import ArrowLeft from "@/public/assets/Arrow left@3x.png";
import Image from "next/image";
import BorderGoldenBox from "../BorderGoldenBox";
import { Card } from "@/app/utilities/types";

export default function CardNavigatorTemplate({
    cardMobileIndex,
    curCardNumber,
    pages,
    cardArray,
    handleNext,
    handlePrev,
    handleDirectNavigate,
    handleMobilePrev,
    handleMobileNext,
    handleMobileDirect,
    cards,
    page,
    pageCount,
    cardCount,
}: Readonly<{
    cardMobileIndex: number;
    curCardNumber: number;
    pages: number[];
    cardArray: number[];
    handleNext: () => void;
    handlePrev: () => void;
    handleDirectNavigate: (page: string) => void;
    handleMobilePrev: () => void;
    handleMobileNext: () => void;
    handleMobileDirect: (card: number) => void;
    cards: Card[];
    page: number;
    pageCount: number;
    cardCount: number;
}>) {
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
        </div>
    );
};
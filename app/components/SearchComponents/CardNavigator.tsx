'use client';

import { useMemo, useState } from "react";
import { Card, UrlSearchParams } from "../../utilities/types";
import CardComponent from "../CardComponent";
import ArrowRight from "@/public/assets/Arrow right@3x.png";
import ArrowLeft from "@/public/assets/Arrow left@3x.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { searchSingularParam } from "../../utilities/functions";
import BorderGoldenBox from "../BorderGoldenBox";
import CardNavigatorTemplate from "./CardNavigatorTemplate";

export default function CardNavigator({ cards, page, pageCount, cardCount, searchParams }: Readonly<{
    cards: Card[];
    page: number;
    pageCount: number;
    cardCount: number;
    searchParams: UrlSearchParams;
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
        <CardNavigatorTemplate
            cardMobileIndex={cardMobileIndex}
            curCardNumber={curCardNumber}
            pages={pages}
            cardArray={cardArray}
            handleNext={handleNext}
            handlePrev={handlePrev}
            handleDirectNavigate={handleDirectNavigate}
            handleMobilePrev={handleMobilePrev}
            handleMobileNext={handleMobileNext}
            handleMobileDirect={handleMobileDirect}
            cards={cards}
            page={page}
            pageCount={pageCount}
            cardCount={cardCount}
        />
    )
};
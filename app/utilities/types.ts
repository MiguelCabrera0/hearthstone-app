import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export type Card = {
    id: number;
    collectible: number;
    slug: string;
    classId: number;
    multiClassIds: string[];
    minionTypeId?: number;
    cardTypeId: number;
    cardSetId: number;
    rarityId: number;
    artistName: string;
    health?: number;
    attack?: number;
    manaCost: number;
    name: string;
    text: string;
    image: string;
    imageGold: string;
    flavorText: string;
    cropImage: string;
    keywordIds?: number[];
    isZilliaxFunctionalModule: boolean;
    isZilliaxCosmeticModule: string | boolean;
    cardType?: string;
    rarity?: string;
    setName?: string;
};

export type CardSearchResult = {
    cards: Card[];
    cardCount: number,
    pageCount: number,
    page: number,
};

export type SelectOption = {
    name: string,
    slug: number | string,
    image?: string,
};

export type SearchParams = {
    type: string,
    value: string,
    callback?: () => void,
    searchParams: { [key: string]: string | string[] | undefined },
    router: AppRouterInstance
};

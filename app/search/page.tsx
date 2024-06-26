import SearchComponent from "../components/SearchComponents/SearchComponent";
import { getToken, searchCards } from "../utilities/functions";
import Image from "next/image";
import NoCards from "@/public/assets/no cards found@3x.png";
import Link from "next/link";
import CardNavigator from "../components/SearchComponents/CardNavigator";
import { UrlSearchParams } from "../utilities/types";
import SearchParamView from "../components/SearchComponents/SearchParamView";

export default async function Search({
    searchParams,
}: Readonly<{
    searchParams: UrlSearchParams;
}>) {
    const token = await getToken();
    const { cards, page, pageCount, cardCount } = await searchCards(token, searchParams)
        ?? { cards: [], page: 0, pageCount: 0 };
    return cardCount > 0
        ? (
            <div>
                <SearchComponent
                    searchParams={searchParams}
                />
                <div className="hidden md:block">
                    <SearchParamView
                        searchParams={searchParams}
                    />
                </div>
                <CardNavigator
                    page={page}
                    cards={cards}
                    pageCount={pageCount}
                    cardCount={cardCount}
                    searchParams={searchParams}
                />
            </div>
        )
        : (
            <div>
                <SearchParamView
                    searchParams={searchParams}
                />
                <div className="flex w-full justify-center flex-col items-center text-center">
                    <Image
                        src={NoCards}
                        alt="No Cards Found"
                        width={308}
                        height={402}
                    />
                    <span className="text-bold text-2xl my-6">
                        Blasphemy! No cards found.
                    </span>
                    <Link
                        className="text-golden underline mb-24"
                        href="/"
                    >
                        Your quest isn’t over! Try a new search.
                    </Link>
                </div>
            </div>
        )
};
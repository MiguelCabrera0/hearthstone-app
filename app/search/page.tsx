import SearchComponent from "../components/SearchComponent";
import CardComponent from "../components/CardComponent";
import { getToken, searchCards } from "../utilities/functions";
import Image from "next/image";
import NoCards from "@/public/assets/no cards found@3x.png";
import Link from "next/link";
import CardNavigator from "../components/CardNavigator";

export default async function Search({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined }
}) {
    const token = await getToken();
    const { cards, page, pageCount, cardCount } = await searchCards(token, searchParams)
        ?? { cards: [], page: 0, pageCount: 0 };
    return cardCount > 0
        ? (
            <div>
                <SearchComponent
                    searchParams={searchParams}
                />
                <h1 className="text-2xl ml-28 my-8">
                    Results for: "{searchParams.textFilter}"
                </h1>
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
                <h1 className="text-2xl ml-28 my-8">
                    No results for: "{searchParams.textFilter}"
                </h1>
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
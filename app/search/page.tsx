import SearchComponent from "./SearchComponent";
import CardComponent from "../components/CardComponent";
import { getToken, searchCards } from "../utilities/functions";
import Image from "next/image";
import NoCards from "@/public/assets/no cards found@3x.png";
import Link from "next/link";

export default async function Search({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined }
}) {
    const token = await getToken();
    const { cards, page, pageCount, cardCount } = await searchCards(token, searchParams)
        ?? { cards: [], page: 0, pageCount: 0 };
    let start = page - 4;
    let final = 1;
    if (page <= pageCount) {
        if (start < 1) {
            final = page - start + 7;
            start = 1;
        } else {
            final = page + 6;
        }
        if (final > pageCount) {
            final = pageCount + 1;
        }
    } else {
        start = pageCount;
        final = pageCount + 2;
    }
    const pages = new Array(final - start)
        .fill(null)
        .map((_, index) => start + index);
    return cardCount > 0
        ? (
            <div>
                <SearchComponent
                    page={page}
                    pages={pages}
                    searchParams={searchParams}
                />
                <h1 className="text-2xl ml-28 my-8">
                    Results for: "{searchParams.textFilter}"
                </h1>
                <div className="grid grid-cols-5 w-full mb-8">
                    {cards.map((card) => (
                        <CardComponent
                            key={card.id}
                            card={card}
                        />
                    ))}
                </div>
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